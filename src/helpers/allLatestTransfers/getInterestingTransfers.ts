import _ from 'lodash';
import { TTransferFullEntity } from 'ts/types/Entities.types';
import { MINIMUM_VALUE, MILLIONS, LOAN_FEE } from 'constants/Transfermarkt';

export default (transfersInfo: TTransferFullEntity[]) =>
    _.filter(transfersInfo, transferInfo => {
        const { marketValue, fee, highestMarketValue } = transferInfo;

        const marketValueNumber = parseFloat(marketValue.replace(',', '.'));

        const feeNumber = _.includes(fee, LOAN_FEE)
            ? parseFloat(fee.replace(LOAN_FEE, '').replace(',', '.'))
            : parseFloat(fee.replace(',', '.'));

        const highestMarketValueNumber = parseFloat(highestMarketValue.replace(',', '.'));

        if (!_.includes(marketValue, MILLIONS) || marketValueNumber < MINIMUM_VALUE) {
            if (!_.isNaN(feeNumber) && _.includes(fee, MILLIONS) && feeNumber >= MINIMUM_VALUE) {
                return true;
            }

            if (
                _.includes(highestMarketValue, MILLIONS) &&
                highestMarketValueNumber >= MINIMUM_VALUE * 2
            ) {
                return true;
            }

            return false;
        }

        return true;
    });
