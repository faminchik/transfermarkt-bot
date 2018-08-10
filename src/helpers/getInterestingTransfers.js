import _ from 'lodash';
import { MINIMUM_VALUE, MILLION, LOAN_FEE } from '../constants/transfermarkt';

export default transfersInfo =>
    _.filter(transfersInfo, transferInfo => {
        const { marketValue, fee } = transferInfo;

        if (!_.includes(marketValue, MILLION)) return false;

        const marketValueNumber = parseFloat(marketValue.replace(',', '.'));

        const feeNumber = _.includes(fee, LOAN_FEE)
            ? parseFloat(fee.replace(LOAN_FEE, '').replace(',', '.'))
            : parseFloat(fee.replace(',', '.'));

        if (marketValueNumber < MINIMUM_VALUE) {
            if (!_.isNaN(feeNumber) && _.includes(fee, MILLION) && feeNumber >= MINIMUM_VALUE) {
                return true;
            }

            return false;
        }

        return true;
    });
