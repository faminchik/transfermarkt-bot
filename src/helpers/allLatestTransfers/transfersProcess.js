import _ from 'lodash';
import BPromise from 'bluebird';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';
import getInterestingTransfers from 'helpers/allLatestTransfers/getInterestingTransfers';
import { ALL_LATEST_TRANSFERS } from 'constants/transfermarkt/ParsingTypes';

const URL = config.get('latest-transfers-url');

export default async types => {
    const transfers = await BPromise.map(_.range(1, 11), async number => {
        const url = _.replace(URL, '*', number);
        const html = await fetchHtmlRequest(url);
        if (!html) return [];

        const parsingResult = parsingProcess(html, types);
        return getInterestingTransfers(parsingResult[ALL_LATEST_TRANSFERS]);
    });

    return _.uniqWith(_.flatten(transfers), _.isEqual);
};
