import transfersProcess from 'helpers/parsers/teamTransfers/transfersProcess';
import type { TTeamTransferEntity } from 'ts/EntitiesTS';

export default async (
    clubLink: string
): Promise<{
    teamTransfersArrivals: TTeamTransferEntity[];
    teamTransfersDepartures: TTeamTransferEntity[];
}> => {
    const { arrivals: teamTransfersArrivals, departures: teamTransfersDepartures } = await transfersProcess(clubLink);

    return { teamTransfersArrivals, teamTransfersDepartures };
};
