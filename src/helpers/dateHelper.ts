import _ from 'lodash';
import moment from 'moment';
import { SUMMER_TRANSFERS, WINTER_TRANSFERS } from 'constants/Transfermarkt';

const DAYS_NUMBER = 2;

const getCurrentDate = () => moment(moment().format('ll'), 'MMM DD, YYYY');

export const getLowerDate = (daysNumber = DAYS_NUMBER): moment.Moment => {
    const finalDaysNumber = daysNumber < 0 ? DAYS_NUMBER : daysNumber;

    const currentDate = getCurrentDate();
    console.log('currentDate', currentDate);
    const lowerDate = moment(_.cloneDeep(currentDate).subtract(finalDaysNumber, 'day').format('ll'), 'MMM DD, YYYY');
    console.log('lowerDate', lowerDate);
    return lowerDate;
};

export const getTransferPeriodType = () => {
    const currentDate = getCurrentDate();
    const monthNumber = currentDate.month();

    // [0, 1, 2, 3, 4] = Jan, Feb, Mar, Apr, May months
    return _.includes(_.range(0, 5), monthNumber) ? WINTER_TRANSFERS : SUMMER_TRANSFERS;
};

export const getYearForTransferPeriod = () => {
    const currentDate = getCurrentDate();
    const year = currentDate.year();

    const transferPeriodType = getTransferPeriodType();
    return transferPeriodType === SUMMER_TRANSFERS ? year : year - 1;
};
