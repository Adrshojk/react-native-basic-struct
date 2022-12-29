import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getUser = state => state[STATE_REDUCER_KEY];

const useraddComplaintData = user => user.addComplaints;
export const getaddComplaints = flow(getUser, useraddComplaintData);

const userAuthData = user => user.complaintList;
export const getComplaints = flow(getUser, userAuthData);

const userDistrictData = user => user.districtList;
export const getDistrictData = flow(getUser, userDistrictData);

const userLsgiData = user => user.lsgiList;
export const getLsgiData = flow(getUser, userLsgiData);

const userWardData = user => user.wardList;
export const getWardData = flow(getUser, userWardData);

const userComplaintCategoryData = user => user.categoryList;
export const getComplaintCategoryData = flow(getUser, userComplaintCategoryData);

const userComplaintModeData = user => user.modeList;
export const getComplaintModeData = flow(getUser, userComplaintModeData);

const userComplaintTypeData = user => user.typeList;
export const getComplaintTypeData = flow(getUser, userComplaintTypeData);

const userDeleteComplaintData = user => user.deleteList;
export const deleteComplaintData = flow(getUser, userDeleteComplaintData);
