import _ from 'lodash';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import parsingProcess from 'helpers/parsingProcess';
import { START_PAGE, TRANSFERS } from 'constants/transfermarkt';

const URL = config.get('team-latest-transfers-url');

export default async (clubLink, types) => {
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

    return parsingProcess(html, types);
};
