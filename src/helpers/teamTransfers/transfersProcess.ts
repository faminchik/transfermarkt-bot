import _ from 'lodash';
import config from 'config';
import pt from 'constants/transfermarkt/ParsingTypes';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import parsingProcess from 'helpers/parsingProcess';
import { START_PAGE, TRANSFERS } from 'constants/Transfermarkt';

const URL: string = config.get('team-latest-transfers-url');

export default async (clubLink: string, types: pt[]) => {
    const year = getYearForTransferPeriod();
    const transferPeriodType = getTransferPeriodType();

    const url = _.chain(URL)
        .replace('*link*', clubLink)
        .replace('*year*', _.toString(year))
        .replace('*period*', transferPeriodType)
        .replace(START_PAGE, TRANSFERS)
        .value();

    const html = await fetchHtmlRequest(url);
    if (!html) return {};

    return parsingProcess(html, types);
};
