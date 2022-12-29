import { all, takeLatest, takeEvery, delay, put, take, fork, call, select } from 'redux-saga/effects';
import _ from 'lodash';
import { saga } from '../../common';
import * as Actions from './actions';
import * as ComplaintAPI from './api'
import { utils } from '../../common';
import Toast from 'react-native-toast-message';

// const { ROLE_TYPES: {  } } = constants;

const { types: ActionTypes } = Actions;
const  {toastUtil:{infoToast,successToast,errorToast} } = utils;
const {
    navigateToComplaint
} = Actions;

function* authenticate() {
    console.log("in authenticate saga")
}

function* addcomplaint(data) {
    let payLoad = { "payLoad": data.payload.data }
    yield fork(saga.handleAPIRequest, ComplaintAPI.addcomplaint, payLoad);

    const authSuccessAction = yield take(ActionTypes.GET_COMPLAINT_SUCCESS);
    console.log("authSuccessAction:",authSuccessAction)
    if (authSuccessAction.type === ActionTypes.GET_COMPLAINT_SUCCESS) {
        yield call(successToast, 'Complaint Added');
        yield put(Actions.navigateToComplaintsList());
    }
    yield put(Actions.navigateToComplaintsList());
  
}

function* fetchComplaints() {
    console.log("in fetchComplaints saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.fetchComplaints);
    const loadcomplaintListSuccessAction = yield take(ActionTypes.FETCH_COMPLAINTS_SUCCESS);
    if (loadcomplaintListSuccessAction.type === ActionTypes.FETCH_COMPLAINTS_SUCCESS) {
        yield call(successToast,'complaint_successfully');
    }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    console.log("loadcomplaintListSuccessAction:",loadcomplaintListSuccessAction.payload)
}

function* deleteComplaint(action) {
    const userInfo = yield select(fetchComplaints);
    const { additionalInfo: { complaintNo } } = userInfo;
    let complaintId = action.payload.data;
    yield fork(saga.handleAPIRequest, ComplaintAPI.deleteComplaint, customerNumber, complaintId);
    const successAction = yield take(ActionTypes.DELETE_COMPLAINT_SUCCESS);
    if (successAction.type === ActionTypes.DELETE_COMPLAINT_SUCCESS) {
        yield call(successToast, I18n.t('complaint_deleted_successfully'));
    }
    yield call(fetchComplaints);
}


function* fetchDistrict() {
    console.log("in fetchDistrict saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getDistrict);
    const loadDistrictListSuccessAction = yield take(ActionTypes.GET_DISTRICT_SUCCESS);
    console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchLsgi() {
    console.log("in fetchDistrict saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getLsgi);
    const loadUlbListSuccessAction = yield take(ActionTypes.GET_LSGI_SUCCESS);
    console.log("loadUlbListSuccessAction:",loadUlbListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchWard() {
    console.log("in fetchward saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getWard);
    const loadWardListSuccessAction = yield take(ActionTypes.GET_WARD_SUCCESS);
    console.log("loadWardListSuccessAction:",loadWardListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchComplaintMode() {
    console.log("in fetchComplaintMode saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getComplaintMode);
    const loadModeListSuccessAction = yield take(ActionTypes.GET_COMPMODE_SUCCESS);
    console.log("loadModeListSuccessAction:",loadModeListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchComplaintCategory() {
    console.log("in fetchComplaintCategory saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getComplaintCategory);
    const loadCAtegoryListSuccessAction = yield take(ActionTypes.GET_COMPCATEGORY_SUCCESS);
    console.log("loadCAtegoryListSuccessAction:",loadCAtegoryListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}

function* fetchComplaintType() {
    console.log("in fetchComplaintCategory saga")
    yield fork(saga.handleAPIRequest, ComplaintAPI.getComplaintType);
    const loadTypeListSuccessAction = yield take(ActionTypes.GET_COMPTYPE_SUCCESS);
    console.log("loadTypeListSuccessAction:",loadTypeListSuccessAction)
    // if (loadDistrictListSuccessAction) {
    //     yield call(successToast,'district_succsfully');
    // }
    // yield put({type:ActionTypes.FETCH_COMPLAINTS_SUCCESS,payload:loadcomplaintListSuccessAction})
    // console.log("loadDistrictListSuccessAction:",loadDistrictListSuccessAction.payload)
}



export default function* userSaga() {
    yield all([
        takeLatest(ActionTypes.COMPLAINT_REQUEST, addcomplaint),
        takeLatest(ActionTypes.GET_COMPLAINT_REQUEST, authenticate),
        // takeLatest(navigateToComplaint),
        takeLatest(ActionTypes.FETCH_COMPLAINTS,fetchComplaints),
        takeLatest(ActionTypes.DELETE_COMPLAINT,deleteComplaint),
        takeLatest(ActionTypes.DISTRICT_REQUEST,fetchDistrict),
        takeLatest(ActionTypes.LSGI_REQUEST,fetchLsgi),
        takeLatest(ActionTypes.WARD_REQUEST,fetchWard),
        takeLatest(ActionTypes.COMPMODE_REQUEST, fetchComplaintMode),
        takeLatest(ActionTypes.COMPCATEGORY_REQUEST, fetchComplaintCategory),
        takeLatest(ActionTypes.COMPTYPE_REQUEST, fetchComplaintType)
    ]);
}
