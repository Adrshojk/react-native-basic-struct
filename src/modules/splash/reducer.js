import { types as ActionTypes } from './actions';

const initialState = {
    userDetails: {  },
    data:true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return Object.assign({}, state, {
                userDetails: action.payload.data
            });
        default:
            return state;
    }
};
