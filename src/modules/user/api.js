import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function authenticate(body) {
    console.log('signup api')
    let payload = {
        body,
        types: [ActionTypes.USER_SIGNUP_REQUEST, ActionTypes.USER_SIGNUP_SUCCESS, ActionTypes.USER_SIGNUP_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/idm/user/register',
        api: restAPI.post,
        payload
    };
}

export function getGender(){
    console.log('gender api')
    let payload = {
        types: [ActionTypes.GET_GENDER_REQUEST, ActionTypes.GET_GENDER_SUCCESS, ActionTypes.GET_GENDER_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/gender/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getUsertype(){
    console.log('USERTYPE api')
    let payload = {
        types: [ActionTypes.GET_USERTYPE_REQUEST, ActionTypes.GET_USERTYPE_SUCCESS, ActionTypes.GET_USERTYPE_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/user-type/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getLogintype(){
    console.log('LOGINTYPE api')
    let payload = {
        types: [ActionTypes.GET_LOGINTYPE_REQUEST, ActionTypes.GET_LOGINTYPE_SUCCESS, ActionTypes.GET_LOGINTYPE_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/user-login-type/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getDistrict(){
    console.log('district api')
    let payload = {
        types: [ActionTypes.GET_DISTRICT_REQUEST, ActionTypes.GET_DISTRICT_SUCCESS, ActionTypes.GET_DISTRICT_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/district/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getUlb(){
    console.log('ulb api')
    let payload = {
        types: [ActionTypes.GET_ULB_REQUEST, ActionTypes.GET_ULB_SUCCESS, ActionTypes.GET_ULB_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/lsgi-details/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getWard(){
    console.log('ward api')
    let payload = {
        types: [ActionTypes.GET_WARD_REQUEST, ActionTypes.GET_WARD_SUCCESS, ActionTypes.GET_WARD_FAILED]
    };
    return {
        endpoint: 'admin/api/auth/master/ward/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

