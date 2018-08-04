import _ from 'lodash';
import { MINIMUM_VALUE, MILLION } from '../constants/transfermarkt';

export default transfersInfo =>
    _.filter(transfersInfo, transferInfo => {
        const { marketValue, fee } = transferInfo;

        if (!_.includes(marketValue, MILLION)) return false;

        const marketValueNumber = parseFloat(_.replace(marketValue, ',', '.'));
        const feeNumber = parseFloat(_.replace(fee, ',', '.'));

        if (marketValueNumber < MINIMUM_VALUE) {
            if (!_.isNaN(feeNumber) && _.includes(fee, MILLION) && feeNumber >= MINIMUM_VALUE) {
                return true;
            }

            return false;
        }

        return true;
    });
