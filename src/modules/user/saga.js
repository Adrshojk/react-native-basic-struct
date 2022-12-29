import { all, call, takeLatest, fork, take, select, spawn, put } from 'redux-saga/effects';
// import _ from 'lodash';
import * as Actions from './actions';
import * as UserAPI from './api';
import { saga } from '../../common';
import { utils } from '../../common';

// const { ROLE_TYPES: {  } } = constants;
const { types: ActionTypes } = Actions;
const { toastUtil: { infoToast, successToast, errorToast } } = utils;

function* authenticate(data) {
    // console.log("in authenticate signup",data.payload.data.userName)
    let payLoad = { "payLoad": data.payload.data }
    // const datadummy={
    //     "payLoad": {
    //         "name": data.payload.data.userName,
    //         "genderId": 1,
    //         "mobileNo": 9495296497,
    //         "altNo": 0,
    //         "email": "amy@ty.com",
    //         "districtId": {
    //             "id": 14
    //         },
    //         "ulbId": {
    //             "id": 1
    //         },
    //         "wardId": {
    //             "id": "1"
    //         }
    //     }
    // }

    yield fork(saga.handleAPIRequest, UserAPI.authenticate, payLoad);

    const authSuccessAction = yield take(ActionTypes.USER_SIGNUP_SUCCESS);
    if (authSuccessAction.type === ActionTypes.USER_SIGNUP_SUCCESS) {
        yield call(successToast, 'Successfully registered');
        yield put(Actions.navigateToComplaint());
    }
  
}

function* fetchDistrict() {
    console.log("in fetchDistrict saga")
    yield fork(saga.handleAPIRequest, UserAPI.getDistrict);
    const loadDistrictListSuccessAction = yield take(ActionTypes.GET_DISTRICT_SUCCESS);
    console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchUlb() {
    console.log("in fetchDistrict saga")
    yield fork(saga.handleAPIRequest, UserAPI.getUlb);
    const loadUlbListSuccessAction = yield take(ActionTypes.GET_ULB_SUCCESS);
    console.log("loadUlbListSuccessAction:",loadUlbListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchWard() {
    console.log("in fetchward saga")
    yield fork(saga.handleAPIRequest, UserAPI.getWard);
    const loadWardListSuccessAction = yield take(ActionTypes.GET_WARD_SUCCESS);
    console.log("loadWardListSuccessAction:",loadWardListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchGender() {
    console.log("in fetchward saga")
    yield fork(saga.handleAPIRequest, UserAPI.getGender);
    const loadGenderListSuccessAction = yield take(ActionTypes.GET_GENDER_SUCCESS);
    console.log("loadGenderListSuccessAction:",loadGenderListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchUsertype() {
    console.log("in fetchUSERTYPE saga")
    yield fork(saga.handleAPIRequest, UserAPI.getUsertype);
    const loadUsertypeListSuccessAction = yield take(ActionTypes.GET_USERTYPE_SUCCESS);
    console.log("loadUsertypeListSuccessAction:",loadUsertypeListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchLogintype() {
    console.log("in fetchLOGINTYPE saga")
    yield fork(saga.handleAPIRequest, UserAPI.getLogintype);
    const loadLogintypeListSuccessAction = yield take(ActionTypes.GET_LOGINTYPE_SUCCESS);
    console.log("loadLogintypeListSuccessAction:",loadLogintypeListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}


export default function* userSaga() {
    yield all([
        takeLatest(ActionTypes.USER_SIGNUP, authenticate),
        takeLatest(ActionTypes.DISTRICT_REQUEST,fetchDistrict),
        takeLatest(ActionTypes.ULB_REQUEST,fetchUlb),
        takeLatest(ActionTypes.WARD_REQUEST,fetchWard),
        takeLatest(ActionTypes.GENDER_REQUEST,fetchGender),
        takeLatest(ActionTypes.USERTYPE_REQUEST,fetchUsertype),
        takeLatest(ActionTypes.LOGINTYPE_REQUEST,fetchLogintype),
    ]);
}
