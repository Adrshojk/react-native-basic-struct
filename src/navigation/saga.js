import { all, takeLatest, call } from 'redux-saga/effects';
import { actions } from '../common';
import { isReadyRef, navigationRef } from './constants';

const { navigation: { types: NavActionTypes } } = actions;

function* navigate(action) {
    console.log("navigate in saga")
    let { name, params } = action && action.payload ? action.payload : {};
    console.log("name, params:",name, params)
    if (isReadyRef.current && navigationRef.current) {
        yield call(navigationRef.current.navigate, name, params);
    }
}

function* navigateBack() {
    console.log("in navigateBack saga")
    yield call(navigationRef.current.goBack);
}

function* navigateWithReset(action) {
    let { name, params } = action && action.payload ? action.payload : {};
    if (isReadyRef.current && navigationRef.current) {
        yield call(navigationRef.current.reset, {
            index: 0,
            routes: [
                {
                    name,
                    params,
                },
            ],
        });
    }
}

export default function* navigationSaga() {
    yield all([
        takeLatest(NavActionTypes.NAVIGATE, navigate),
        takeLatest(NavActionTypes.NAVIGATE_BACK, navigateBack),
        takeLatest(NavActionTypes.NAVIGATE_WITH_RESET, navigateWithReset),
    ]);
}
