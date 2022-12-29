import { fork, all } from 'redux-saga/effects';
import _ from 'lodash';
import * as modules from '../modules';
import * as netinfo from '../netinfo';
import * as navigation from '../navigation';

let sagas = [fork(navigation.saga)];
_.values(modules).forEach(module => {
    if (module.saga) {
        sagas.push(fork(module.saga));
    }
});

export default function* root() {
    yield all(sagas);
};
