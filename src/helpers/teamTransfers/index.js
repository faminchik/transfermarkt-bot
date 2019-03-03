import transfersProcess from 'helpers/teamTransfers/transfersProcess';
import {
    TEAM_TRANSFERS_ARRIVALS,
    TEAM_TRANSFERS_DEPARTURES
} from 'constants/transfermarkt/ParsingTypes';

export default async clubLink => {
    const types = [TEAM_TRANSFERS_ARRIVALS, TEAM_TRANSFERS_DEPARTURES];

    return await transfersProcess(clubLink, types);
};
