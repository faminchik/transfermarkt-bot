import _ from 'lodash';
import moment from 'moment';
import { SUMMER_TRANSFERS, WINTER_TRANSFERS } from 'constants/transfermarkt';

const DAYS_NUMBER = 2;

const getCurrentDate = () => moment(moment().format('ll'), 'MMM DD, YYYY');

export const getBottomDate = (daysNumber = DAYS_NUMBER) => {
    if (!_.isNumber(daysNumber) || daysNumber < 0) daysNumber = DAYS_NUMBER;

    const currentDate = getCurrentDate();
    console.log('currentDate', currentDate);
    const bottomDate = moment(
        _.cloneDeep(currentDate)
            .subtract(daysNumber, 'day')
            .format('ll'),
        'MMM DD, YYYY'
    );
    console.log('bottomDate', bottomDate);
    return bottomDate;
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
