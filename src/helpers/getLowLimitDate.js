import _ from 'lodash';
import moment from 'moment';

const DAYS_NUMBER = 1;

export default () => {
    const currentDate = moment(moment().format('ll'), 'MMM DD, YYYY');
    console.log('currentDate', currentDate);
    const lowLimitDate = moment(
        _.cloneDeep(currentDate)
            .subtract(DAYS_NUMBER, 'day')
            .format('ll'),
        'MMM DD, YYYY'
    );
    console.log('lowLimitDate', lowLimitDate);
    return lowLimitDate;
};
