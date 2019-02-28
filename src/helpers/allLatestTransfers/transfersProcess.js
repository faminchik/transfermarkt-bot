import _ from 'lodash';
import BPromise from 'bluebird';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/allLatestTransfers/getTableDataFromHTML';
import getInterestingTransfers from 'helpers/allLatestTransfers/getInterestingTransfers';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import { ALL_LATEST_TRANSFERS } from 'constants/transfermarkt/ConvertDataTypes';

const URL = config.get('latest-transfers-url');

export default async () => {
    const transfers = await BPromise.map(_.range(1, 11), async number => {
        const url = _.replace(URL, '*', number);
        const html = await fetchHtmlRequest(url);
        if (!html) return [];

        const { textData, htmlData } = getTableDataFromHTML(html);
        const transfersInfo = convertData(
            { textData, htmlData },
            ConvertDataConfig[ALL_LATEST_TRANSFERS]
        );

        return getInterestingTransfers(transfersInfo);
    });

    return _.uniqWith(_.flatten(transfers), _.isEqual);
};
