import transfersProcess from 'helpers/teamTransfers/transfersProcess';
import * as ttt from 'constants/transfermarkt/TeamTransfersTypes';

export default async clubLink => {
    const types = [ttt.TEAM_TRANSFERS_ARRIVALS, ttt.TEAM_TRANSFERS_DEPARTURES];

    return await transfersProcess(clubLink, types);
};
