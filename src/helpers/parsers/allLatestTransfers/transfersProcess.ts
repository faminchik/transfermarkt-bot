import _ from 'lodash';
import BPromise from 'bluebird';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';
import getInterestingTransfers from 'helpers/parsers/allLatestTransfers/getInterestingTransfers';
import addPlayerProfileData from 'helpers/parsers/allLatestTransfers/addPlayerProfileData';
import pt from 'constants/transfermarkt/ParsingTypes';
import ptm from 'constants/transfermarkt/ParsingTableModes';
import { LATEST_TRANSFERS_URL } from 'constants/Config';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

export default async (): Promise<TTransferFullEntity[]> => {
    const transfers = await BPromise.map(_.range(1, 11), async (number) => {
        const url = _.replace(LATEST_TRANSFERS_URL, '*', _.toString(number));
        const html = await fetchHtmlRequest(url);
        if (!html) return [];

        const transfersInfo = parsingProcess(html, pt.ALL_LATEST_TRANSFERS, ptm.TABLE);
        const fullTransfersInfo = await addPlayerProfileData(transfersInfo);

        return getInterestingTransfers(fullTransfersInfo);
    });

    return _.uniqWith(_.flatten(transfers), _.isEqual);
};
