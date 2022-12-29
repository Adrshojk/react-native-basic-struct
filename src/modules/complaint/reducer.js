import { types as ActionTypes } from './actions';

const initialState = {
    addComplaint: {},
    complaintList: {
        payLoad: {
            content: {}
        }
    },
    deleteComplaint:{},
    modeList: {},
    categoryList: {},
    typeList: {},
    districtList: {},
    lsgiList: {},
    wardList: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_COMPLAINT_SUCCESS:
            return Object.assign({}, state, {
                addComplaint: action.payload.data
            });
        case ActionTypes.FETCH_COMPLAINTS_SUCCESS:
            return Object.assign({}, state, {
                complaintList: action.payload.data,
            });
        case ActionTypes.DELETE_COMPLAINT_SUCCESS:
            return Object.assign({}, state, {
                deleteComplaint: action.payload.data,
            });

        case ActionTypes.GET_DISTRICT_SUCCESS:
            return Object.assign({}, state, {
                districtList: action.payload.data,
            });
        case ActionTypes.GET_LSGI_SUCCESS:
            return Object.assign({}, state, {
                lsgiList: action.payload.data,
            });
        case ActionTypes.GET_WARD_SUCCESS:
            return Object.assign({}, state, {
                wardList: action.payload.data,
            });
        case ActionTypes.GET_COMPMODE_SUCCESS:
            return Object.assign({}, state, {
                modeList: action.payload.data,
            });
        case ActionTypes.GET_COMPCATEGORY_SUCCESS:
            return Object.assign({}, state, {
                categoryList: action.payload.data,
            });
        case ActionTypes.GET_COMPTYPE_SUCCESS:
            return Object.assign({}, state, {
                typeList: action.payload.data,
            });
        default:
            return state;
    }
};
