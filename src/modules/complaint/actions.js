import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as COMPLAINT_ROUTE_KEYS } from './constants';
import { ROUTE_KEYS as USER_ROUTE_KEYS } from '../user/constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    COMPLAINT_REQUEST: 'Complaint/COMPLAINT_REQUEST',
    GET_COMPLAINT_REQUEST: 'Complaint/GET_COMPLAINT_REQUEST',
    GET_COMPLAINT_SUCCESS: 'Complaint/GET_COMPLAINT_SUCCESS',
    GET_COMPLAINT_FAILED: 'Complaint/GET_COMPLAINT_FAILED',

    FETCH_COMPLAINTS:'Complaint/COMPLAINTS_LIST',
    FETCH_COMPLAINTS_REQUEST: 'Complaint/FETCH_COMPLAINTS_REQUEST',
    FETCH_COMPLAINTS_SUCCESS: 'Complaint/FETCH_COMPLAINTS_SUCCESS',
    FETCH_COMPLAINTS_FAILED: 'Complaint/FETCH_COMPLAINTS_FAILED',

    DISTRICT_REQUEST: 'user/DISTRICT_REQUEST',
    GET_DISTRICT_REQUEST: 'user/GET_DISTRICT_REQUEST',
    GET_DISTRICT_SUCCESS: 'user/GET_DISTRICT_SUCCESS',
    GET_DISTRICT_FAILED: 'user/GET_DISTRICT_FAILED',

    LSGI_REQUEST: 'user/LSGI_REQUEST',
    GET_LSGI_REQUEST: 'user/GET_LSGI_REQUEST',
    GET_LSGI_SUCCESS: 'user/GET_LSGI_SUCCESS',
    GET_LSGI_FAILED: 'user/GET_LSGI_FAILED',

    WARD_REQUEST: 'user/WARD_REQUEST',
    GET_WARD_REQUEST: 'user/GET_WARD_REQUEST',
    GET_WARD_SUCCESS: 'user/GET_WARD_SUCCESS',
    GET_WARD_FAILED: 'user/GET_WARD_FAILED',

    COMPMODE_REQUEST: 'user/ COMPMODE_REQUEST',
    GET_COMPMODE_REQUEST: 'user/GET_COMPMODE_REQUEST',
    GET_COMPMODE_SUCCESS: 'user/GET_COMPMODE_SUCCESS',
    GET_COMPMODE_FAILED: 'user/GET_COMPMODE_FAILED',

    COMPCATEGORY_REQUEST: 'user/ COMPCATEGORY_REQUEST',
    GET_COMPCATEGORY_REQUEST: 'user/GET_COMPCATEGORY_REQUEST',
    GET_COMPCATEGORY_SUCCESS: 'user/GET_COMPCATEGORY_SUCCESS',
    GET_COMPCATEGORY_FAILED: 'user/GET_COMPCATEGORY_FAILED',

    COMPTYPE_REQUEST: 'user/ COMPTYPE_REQUEST',
    GET_COMPTYPE_REQUEST: 'user/GET_COMPTYPE_REQUEST',
    GET_COMPTYPE_SUCCESS: 'user/GET_COMPTYPE_SUCCESS',
    GET_COMPTYPE_FAILED: 'user/GET_COMPTYPE_FAILED',

    DELETE_COMPLAINT: 'user/DELETE_COMPLAINT',
    DELETE_COMPLAINT_REQUEST: 'user/DELETE_COMPLAINT_REQUEST',
    DELETE_COMPLAINT_SUCCESS: 'user/DELETE_COMPLAINT_SUCCESS',
    DELETE_COMPLAINT_FAILED: 'user/DELETE_COMPLAINT_FAILED',

};

export function fetchComplaints() {
    console.log(" in fetchComplaints")
    return action(types.FETCH_COMPLAINTS);
}

export function deleteComplaint() {
    console.log(" in fetchComplaints")
    return action(types.DELETE_COMPLAINT);
}

export function addcomplaint(data) {
    console.log(" in ADDCOMPLAINT")
    return action(types.COMPLAINT_REQUEST,{data});
}

export function getDistrict() {
    console.log("in Distict")
    return action(types.DISTRICT_REQUEST)
}

export function getLsgi() {
    console.log("in LSGI")
    return action(types.LSGI_REQUEST)
}

export function getWard() {
    console.log("in WARD")
    return action(types.WARD_REQUEST)
}

export function getComplaintMode() {
    console.log("in Mode")
    return action(types.COMPMODE_REQUEST)
}

export function getComplaintCategory() {
    console.log("in category")
    return action(types.COMPCATEGORY_REQUEST)
}

export function getComplaintType() {
    console.log("in type")
    return action(types.COMPTYPE_REQUEST)
}

export function navigateToComplaintsList() {
    console.log("navigateToComplaintsList 456")
    return navigate(MODULE_ROUTE_KEYS.COMPLAINT, { screen: COMPLAINT_ROUTE_KEYS.COMPLAINTS_LIST});
}

export function navigateToNewComplaint() {
    console.log("navigateToForgotpassword action")
    return navigate(MODULE_ROUTE_KEYS.COMPLAINT, { screen: COMPLAINT_ROUTE_KEYS.COMPLAINT_FORM});
}


