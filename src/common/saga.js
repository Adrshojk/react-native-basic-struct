import _ from 'lodash';
import { put, call, select, delay } from 'redux-saga/effects';
import { action, types as CommonActionTypes } from './actions';
import { AUTH_SERVER_ENDPOINT, CLIENT_ID, ERROR_CODES } from './constants';
import { restAPI } from './api';
// import I18n from './i18n';
import { ROUTE_KEYS } from '../modules/user/constants';
import { getUserAuthData, getDistrict } from '../modules/user/selectors';
// import { logout } from '../modules/user/actions';
// import { getSideBarData } from '../modules/dashboard/selectors';
// import { errorToast } from '../common/utils/toastUtil';

const nonRestrictedEndpoints = [AUTH_SERVER_ENDPOINT, 'otp', 'reset-password'];

let refreshTokenInProgress = false;

export function* handleAPIRequest(apiFn, ...requestData) {
    // console.log("in handleAPIRequest requestData:",requestData)
    // console.log("in handleAPIRequest apiFn:",apiFn)
    const { api, endpoint, payload, onUploadProgress, onDownloadProgress, showErrorToast = true } = apiFn(...requestData);
    // console.log("in handleAPIRequest api:",api)
    // console.log("in handleAPIRequest endpoint:",endpoint)
    return yield call(invokeApi, api, endpoint, payload, onUploadProgress, onDownloadProgress, showErrorToast);
}

function* invokeApi(api, endpoint, payload, onUploadProgress, onDownloadProgress, showErrorToast) {
    // console.log("api, endpoint, payload, onUploadProgress, onDownloadProgress:",api, endpoint, payload, onUploadProgress, onDownloadProgress)
    const types = [CommonActionTypes.API_REQUEST, CommonActionTypes.API_SUCCESS, CommonActionTypes.API_FAILED];
    const payloadTypes = payload.types ? payload.types : [];
    types.splice(0, payloadTypes.length, ...payloadTypes);
    const authHeaders = {};
    // if (endpoint) {
    //     if (!isNonRestrictedEndpoint(endpoint)) {
    //         const userAuthData = yield select(getUserAuthData);
    //         const bearerToken = userAuthData.access_token;
    //         if (bearerToken) {
    //             authHeaders['Authorization'] = `Bearer ${bearerToken}`;
    //         } else {
    //             return;
    //         }
    //     }
    // }
    payload.headers = Object.assign({}, payload.headers, authHeaders);
    yield put(action(types[0]));
    const { response, error } = yield call(api, endpoint, payload, onUploadProgress, onDownloadProgress);
    // console.log("response::",response)
    if (response !== undefined) {
        yield put(action(types[1], { data: response }));
    } 
    // else {
    //     const errorCode = error ? error.error_cd : null;
    //     if (errorCode === ERROR_CODES.JWT_EXPIRED) {
    //         yield delay(100);
    //         if (!refreshTokenInProgress) {
    //             refreshTokenInProgress = true;
    //             const { error } = yield call(refreshToken);
    //             refreshTokenInProgress = false;
    //             if (error) {
    //                 // const sideBarData = yield select(getSideBarData);
    //                 // if (sideBarData.currentRoute !== ROUTE_KEYS.LOGIN_FORM) {
    //                 //     yield call(errorToast, I18n.t('session_expired'));
    //                 //     // yield put(logout({ sessionExpired: true })); // If refresh token is also expired, logout the user
    //                 // }
    //                 // yield put(action(types[2], { error }));
    //                 yield delay(100);
    //                 return { error };
    //             }
    //         } else {
    //             while (refreshTokenInProgress) {
    //                 yield delay(1500);
    //             }
    //         }
    //         return yield call(invokeApi, api, endpoint, payload, onUploadProgress, onDownloadProgress, showErrorToast);
    //     } else {
    //         yield delay(500);
    //         // showErrorToast && (yield call(errorToast, error.message));
    //         yield put(action(types[2], { error }));
    //     }
    // }
    return { response, error };
}

function* refreshToken() {
    try {
        const userAuthData = yield select(getUserAuthData);
        const refreshToken = userAuthData.refresh_token;
        const payload = {
            body: { grant_type: 'refresh_token', refresh_token: refreshToken, client_id: CLIENT_ID },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            isAuthCall: true
        };
        const { response, error } = yield call(restAPI.post, AUTH_SERVER_ENDPOINT, undefined, payload);
        if (response) {
            yield put(action(CommonActionTypes.REFRESH_TOKEN_API_SUCCESS, { data: response }));
        } else {
            yield put(action(CommonActionTypes.REFRESH_TOKEN_API_FAILED, { error }));
        }
        return { response, error };
    } catch (error) {
        return { error: { message: 'Error occured while processing refresh token' } };
    }
}

function isNonRestrictedEndpoint(endpoint) {
    return nonRestrictedEndpoints.filter(nonRestrictedEndpoint => endpoint.indexOf(nonRestrictedEndpoint) !== -1).length;
}
