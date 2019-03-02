import _ from 'lodash';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import getTableDataFromHTML from 'helpers/teamTransfers/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import { START_PAGE, TRANSFERS } from 'constants/transfermarkt';

const URL = config.get('team-latest-transfers-url');

export default async (clubLink, types = []) => {
    const year = getYearForTransferPeriod();
    const transferPeriodType = getTransferPeriodType();

    const url = _.chain(URL)
        .replace('*link*', clubLink)
        .replace('*year*', year)
        .replace('*period*', transferPeriodType)
        .replace(START_PAGE, TRANSFERS)
        .value();

    const html = await fetchHtmlRequest(url);
    if (!html) return {};

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
