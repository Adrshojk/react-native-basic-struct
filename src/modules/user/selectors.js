import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getUser = state => state[STATE_REDUCER_KEY];

const userAuthData = user => user.authData;
export const getUserAuthData = flow(getUser, userAuthData);

const userDistrictData = user => user.districtList;
export const getDistrictData = flow(getUser, userDistrictData);

const userUlbData = user => user.ulbList;
export const getUlbData = flow(getUser, userUlbData);

const userWardData = user => user.wardList;
export const getWardData = flow(getUser, userWardData);

const userGenderData = user => user.genderList;
export const getGenderData = flow(getUser, userGenderData);

const userUserTypeData = user => user.usertypeList;
export const getUserTypeData = flow(getUser, userUserTypeData);

const userLoginTypeData = user => user.logintypeList;
export const getLoginTypeData = flow(getUser, userLoginTypeData);