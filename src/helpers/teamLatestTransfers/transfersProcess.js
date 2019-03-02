import _ from 'lodash';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import getTableDataFromHTML from 'helpers/teamLatestTransfers/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import { START_PAGE, TRANSFERS } from 'constants/transfermarkt';
import * as ttt from 'constants/transfermarkt/TeamTransfersTypes';

const URL = config.get('team-latest-transfers-url');

export default async clubLink => {
    const year = getYearForTransferPeriod();
    const transferPeriodType = getTransferPeriodType();

    const url = _.chain(URL)
        .replace('*link*', clubLink)
        .replace('*year*', year)
        .replace('*period*', transferPeriodType)
        .replace(START_PAGE, TRANSFERS)
        .value();

    debugger;

    const html = await fetchHtmlRequest(url);
    if (!html) return {};

    const types = [ttt.TEAM_TRANSFERS_ARRIVALS, ttt.TEAM_TRANSFERS_DEPARTURES];

    return _.reduce(
        types,
        (result, type) => {
            const { textData, htmlData } = getTableDataFromHTML(html, type);
            if (!textData && !htmlData) {
                result[type] = [];
                return result;
            }

            const strategy = ConvertDataStrategies[type];
            const config = ConvertDataConfig[strategy];
            const convertedData = convertData({ textData, htmlData }, config);

            result[type] = convertedData;
            return result;
        },
        {}
    );
};
