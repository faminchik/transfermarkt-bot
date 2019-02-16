import _ from 'lodash';
import moment from 'moment';

const DAYS_NUMBER = 2;

export default () => {
    const currentDate = moment(moment().format('ll'), 'MMM DD, YYYY');
    console.log('currentDate', currentDate);
    const bottomDate = moment(
        _.cloneDeep(currentDate)
            .subtract(DAYS_NUMBER, 'day')
            .format('ll'),
        'MMM DD, YYYY'
    );
    console.log('bottomDate', bottomDate);
    return bottomDate;
};
