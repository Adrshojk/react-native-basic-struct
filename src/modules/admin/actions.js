import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as COMPLAINT_ROUTE_KEYS } from './constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    AUTHENTICATE: 'User/AUTHENTICATE',
    AUTH_REQUEST: 'User/AUTH_REQUEST',
    AUTH_SUCCESS: 'User/AUTH_SUCCESS',
    UPDATE_USER_INFO: 'User/UPDATE_USER_INFO',
};

// export function navigateToComplaint() {
//     return navigate(MODULE_ROUTE_KEYS.COMPLAINT, { screen: COMPLAINT_ROUTE_KEYS.COMPLAINT_FORM});
// }
// export function navigateToNewComplaint() {
//     console.log("navigateToForgotpassword action")
//     return navigate(MODULE_ROUTE_KEYS.COMPLAINT, { screen: COMPLAINT_ROUTE_KEYS.COMPLAINT_FORM});
// }


