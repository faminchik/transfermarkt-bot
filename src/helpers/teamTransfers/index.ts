import transfersProcess from 'helpers/teamTransfers/transfersProcess';
import pt from 'constants/transfermarkt/ParsingTypes';
import { TTeamTransferEntity } from 'ts/types/Entities.types';

export default async (
    clubLink: string
): Promise<{
    [pt.TEAM_TRANSFERS_ARRIVALS]: TTeamTransferEntity[];
    [pt.TEAM_TRANSFERS_DEPARTURES]: TTeamTransferEntity[];
}> => {
    const teamTransfers = await transfersProcess(clubLink);

    return {
        [pt.TEAM_TRANSFERS_ARRIVALS]: teamTransfers.arrivals,
        [pt.TEAM_TRANSFERS_DEPARTURES]: teamTransfers.departures
    };
};
