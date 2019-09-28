import transfersProcess from 'helpers/teamTransfers/transfersProcess';
import pt from 'constants/transfermarkt/ParsingTypes';

export default async (clubLink: string) => {
    const types = [pt.TEAM_TRANSFERS_ARRIVALS, pt.TEAM_TRANSFERS_DEPARTURES] as const;

    const teamTransfers = await transfersProcess(clubLink, types);

    return {
        [pt.TEAM_TRANSFERS_ARRIVALS]: teamTransfers[pt.TEAM_TRANSFERS_ARRIVALS] || [],
        [pt.TEAM_TRANSFERS_DEPARTURES]: teamTransfers[pt.TEAM_TRANSFERS_DEPARTURES] || []
    };
};
