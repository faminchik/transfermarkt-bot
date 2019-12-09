import _ from 'lodash';
import { TTransferFullEntity } from 'ts/types/Entities.types';
import { MINIMUM_VALUE, MILLIONS, LOAN_FEE, EURO } from 'constants/Transfermarkt';

export default (transfersInfo: TTransferFullEntity[]) =>
    _.filter(transfersInfo, transferInfo => {
        const { marketValue, fee, highestMarketValue } = transferInfo;

        try {
            const marketValueNumber = parseFloat(marketValue.replace(EURO, ''));

            const feeNumber = parseFloat(fee.replace(EURO, '').replace(LOAN_FEE, ''));

            const highestMarketValueNumber = parseFloat(highestMarketValue.replace(EURO, ''));

            if (!_.includes(marketValue, MILLIONS) || marketValueNumber < MINIMUM_VALUE) {
                if (!_.isNaN(feeNumber) && _.includes(fee, MILLIONS) && feeNumber >= MINIMUM_VALUE) {
                    return true;
                }

                if (_.includes(highestMarketValue, MILLIONS) && highestMarketValueNumber >= MINIMUM_VALUE * 2) {
                    return true;
                }

                return false;
            }

            return true;
        } catch (error) {
            console.error(error);
            console.log(transferInfo);
            return false;
        }
    });
