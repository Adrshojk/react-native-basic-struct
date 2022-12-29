import moment from 'moment';
import { DATE_FORMAT } from '../constants';

export function convertToLocalDate(utcDate, format) {
    return utcDate && moment(utcDate).format(format || DATE_FORMAT);
}
