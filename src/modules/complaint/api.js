import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function addcomplaint(data) {
    console.tron.log('fetch :::AddComplaint api:',data.payLoad)
    let payload = {
        body:data,
        types: [ActionTypes.GET_COMPLAINT_REQUEST, ActionTypes.GET_COMPLAINT_SUCCESS, ActionTypes.GET_COMPLAINT_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaints/save',
        api: restAPI.post,
        payload
    };
}

export function fetchComplaints() {
    console.log('fetchComplaints api')
    let payload = {
        types: [ActionTypes.FETCH_COMPLAINTS_REQUEST, ActionTypes.FETCH_COMPLAINTS_SUCCESS, ActionTypes.FETCH_COMPLAINTS_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaints/list/all',
        api: restAPI.get,
        payload
    };
}

export function deleteComplaint() {
    console.log('deleteComplaints api')
    let payload = {
        types: [ActionTypes.DELETE_COMPLAINT_REQUEST, ActionTypes.DELETE_COMPLAINT_SUCCESS, ActionTypes.DELETE_COMPLAINT_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaints/delete/{id}',
        api: restAPI.del,
        payload
    };
}


export function getComplaintMode(){
    console.log('getComplaintMode api')
    let payload = {
        types: [ActionTypes.GET_COMPMODE_REQUEST, ActionTypes.GET_COMPMODE_SUCCESS, ActionTypes.GET_COMPMODE_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaint-mode/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getComplaintCategory(){
    console.log('getComplaintCategory api')
    let payload = {
        types: [ActionTypes.GET_COMPCATEGORY_REQUEST, ActionTypes.GET_COMPCATEGORY_SUCCESS, ActionTypes.GET_COMPCATEGORY_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaint-categories/list/all?dropDown=true',
        api: restAPI.get,
        payload
    };
}

export function getComplaintType(){
    console.log('getComplaintType api')
    let payload = {
        types: [ActionTypes.GET_COMPTYPE_REQUEST, ActionTypes.GET_COMPTYPE_SUCCESS, ActionTypes.GET_COMPTYPE_FAILED]
    };
    return {
        endpoint: 'grm/api/auth/grm/complaint-type/list/all?dropDown=true',
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

export function getLsgi(){
    console.log('lsgi api')
    let payload = {
        types: [ActionTypes.GET_LSGI_REQUEST, ActionTypes.GET_LSGI_SUCCESS, ActionTypes.GET_LSGI_FAILED]
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
