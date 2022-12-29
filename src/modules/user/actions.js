import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as USER_ROUTE_KEYS } from './constants';
import { ROUTE_KEYS as COMPLAINT_ROUTE_KEYS } from '../complaint/constants';
import { act } from 'react-test-renderer';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    USER_SIGNUP: 'User/SIGNUP',
    USER_SIGNUP_REQUEST: 'User/SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: 'User/SIGNUP_SUCCESS',
    UPDATE_USER_INFO: 'User/UPDATE_USER_INFO',

    DISTRICT_REQUEST: 'user/DISTRICT_REQUEST',
    GET_DISTRICT_REQUEST: 'user/GET_DISTRICT_REQUEST',
    GET_DISTRICT_SUCCESS: 'user/GET_DISTRICT_SUCCESS',
    GET_DISTRICT_FAILED: 'user/GET_DISTRICT_FAILED',

    ULB_REQUEST: 'user/ULB_REQUEST',
    GET_ULB_REQUEST: 'user/GET_ULB_REQUEST',
    GET_ULB_SUCCESS: 'user/GET_ULB_SUCCESS',
    GET_ULB_FAILED: 'user/GET_ULB_FAILED',

    WARD_REQUEST: 'user/WARD_REQUEST',
    GET_WARD_REQUEST: 'user/GET_WARD_REQUEST',
    GET_WARD_SUCCESS: 'user/GET_WARD_SUCCESS',
    GET_WARD_FAILED: 'user/GET_WARD_FAILED',

    GENDER_REQUEST: 'user/GENDER_REQUEST',
    GET_GENDER_REQUEST: 'user/GET_GENDER_REQUEST',
    GET_GENDER_SUCCESS: 'user/GET_GENDER_SUCCESS',
    GET_GENDER_FAILED: 'user/GET_GENDER_FAILED',

    USERTYPE_REQUEST: 'user/USERTYPE_REQUEST',
    GET_USERTYPE_REQUEST: 'user/GET_USERTYPE_REQUEST',
    GET_USERTYPE_SUCCESS: 'user/GET_USERTYPE_SUCCESS',
    GET_USERTYPE_FAILED: 'user/GET_USERTYPE_FAILED',

    LOGINTYPE_REQUEST: 'user/LOGINTYPE_REQUEST',
    GET_LOGINTYPE_REQUEST: 'user/GET_LOGINTYPE_REQUEST',
    GET_LOGINTYPE_SUCCESS: 'user/GET_LOGINTYPE_SUCCESS',
    GET_LOGINTYPE_FAILED: 'user/GET_LOGINTYPE_FAILED',

};

export function authenticate(data) {
    console.log("in authenticate")
    return action(types.USER_SIGNUP, { data });
}

export function getDistrict() {
    console.log("in Distict")
    return action(types.DISTRICT_REQUEST)
}

export function getUlb() {
    console.log("in ULB")
    return action(types.ULB_REQUEST)
}

export function getWard() {
    console.log("in WARD")
    return action(types.WARD_REQUEST)
}

export function getGender() {
    console.log("in WARD")
    return action(types.GENDER_REQUEST)
}

export function getUserType() {
    console.log("in WARD")
    return action(types.USERTYPE_REQUEST)
}

export function getLoginType() {
    console.log("in WARD")
    return action(types.LOGINTYPE_REQUEST)
}

export function updateUser() {
    console.log("in Action")
    return action(types.UPDATE_USER_INFO);
}

export function navigateToComplaint() {
    console.log("navigateToComplaint 123")
    return navigate(MODULE_ROUTE_KEYS.COMPLAINT, { screen: COMPLAINT_ROUTE_KEYS.COMPLAINTS});
}

export function navigateToLogin() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.LOGIN_FORM });
}

export function navigateToForgotpassword() {
    console.log("navigateToForgotpassword action")
    return navigate(USER_ROUTE_KEYS.FORGOT_PASSWORD);
}

export function navigateToSignup() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.SIGNUP_FORM });
}

