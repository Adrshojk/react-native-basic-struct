import { types as ActionTypes } from './actions';

const initialState = {
    userDetails: {},
    genderList: {},
    usertypeList: {},
    logintypeList: {},
    districtList: {},
    ulbList: {},
    wardList: {},
    data: true,
    login: {
        isAuthenticating: false
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_SIGNUP_SUCCESS:
            return Object.assign({}, state, {
                userDetails: action.payload.data
            });
        case ActionTypes.GET_DISTRICT_SUCCESS:
            return Object.assign({}, state, {
                districtList: action.payload.data,
            });
        case ActionTypes.GET_ULB_SUCCESS:
            return Object.assign({}, state, {
                ulbList: action.payload.data,
            });
        case ActionTypes.GET_WARD_SUCCESS:
            return Object.assign({}, state, {
                wardList: action.payload.data,
            });
        case ActionTypes.GET_GENDER_SUCCESS:
            return Object.assign({}, state, {
                genderList: action.payload.data,
            });
        case ActionTypes.GET_USERTYPE_SUCCESS:
            return Object.assign({}, state, {
                usertypeList: action.payload.data,
            });
        case ActionTypes.GET_LOGINTYPE_SUCCESS:
            return Object.assign({}, state, {
                logintypeList: action.payload.data,
            });
        default:
            return state;
    }
};



