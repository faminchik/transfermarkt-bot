import _ from 'lodash';
import pt from 'constants/transfermarkt/ParsingTypes';
import ptm from 'constants/transfermarkt/ParsingTableModes';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import parsingProcess from 'helpers/parsingProcess';
import { START_PAGE, TRANSFERS } from 'constants/Transfermarkt';
import { TEAM_LATEST_TRANSFERS_URL } from 'constants/Config';
import type { TTeamTransferEntity } from 'ts/EntitiesTS';

export default async (
    clubLink: string
): Promise<{ arrivals: TTeamTransferEntity[]; departures: TTeamTransferEntity[] }> => {
    const year = getYearForTransferPeriod();
    const transferPeriodType = getTransferPeriodType();

    const url = _.chain(TEAM_LATEST_TRANSFERS_URL)
        .replace('*link*', clubLink)
        .replace('*year*', _.toString(year))
        .replace('*period*', transferPeriodType)
        .replace(START_PAGE, TRANSFERS)
        .value();

    const html = await fetchHtmlRequest(url);
    if (!html) return { arrivals: [], departures: [] };

    return {
        arrivals: parsingProcess(html, pt.TEAM_TRANSFERS_ARRIVALS, ptm.TABLE),
        departures: parsingProcess(html, pt.TEAM_TRANSFERS_DEPARTURES, ptm.TABLE)
    };
};
