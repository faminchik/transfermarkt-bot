import transfersProcess from 'helpers/teamTransfers/transfersProcess';
import pt from 'constants/transfermarkt/ParsingTypes';

export default async (clubLink: string) => {
    const types = [pt.TEAM_TRANSFERS_ARRIVALS, pt.TEAM_TRANSFERS_DEPARTURES];

    return await transfersProcess(clubLink, types);
};
