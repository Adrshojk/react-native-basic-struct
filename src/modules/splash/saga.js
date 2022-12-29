import { all, call, takeLatest, select, spawn, put } from 'redux-saga/effects';
// import _ from 'lodash';
import * as Actions from './actions';

// const { ROLE_TYPES: {  } } = constants;

const { types: ActionTypes } = Actions;

function* authenticate() {
    console.log("in authenticate saga")
}

export default function* userSaga() {
    yield all([
        takeLatest(ActionTypes.UPDATE_USER_INFO, authenticate),
    ]);
}
