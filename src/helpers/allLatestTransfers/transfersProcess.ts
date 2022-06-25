import _ from 'lodash';
import BPromise from 'bluebird';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';
import getInterestingTransfers from 'helpers/allLatestTransfers/getInterestingTransfers';
import addPlayerProfileData from 'helpers/allLatestTransfers/addPlayerProfileData';
import pt from 'constants/transfermarkt/ParsingTypes';
import { TTransferFullEntity } from 'ts/types/Entities.types';

const URL: string = config.get('latest-transfers-url');

export default async (): Promise<TTransferFullEntity[]> => {
    const transfers = await BPromise.map(_.range(1, 11), async number => {
        const url = _.replace(URL, '*', _.toString(number));
        const html = await fetchHtmlRequest(url);
        if (!html) return [];

        const transfersInfo = parsingProcess(html, pt.ALL_LATEST_TRANSFERS);
        const fullTransfersInfo = await addPlayerProfileData(transfersInfo);

        return getInterestingTransfers(fullTransfersInfo);
    });

    return _.uniqWith(_.flatten(transfers), _.isEqual);
};
