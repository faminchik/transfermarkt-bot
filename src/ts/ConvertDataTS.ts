import type pt from 'constants/transfermarkt/ParsingTypes';
import type { TTransferEntity, TClubEntity, TTeamTransferEntity } from 'ts/EntitiesTS';

export type TConvertedDataMapper = {
    [pt.ALL_LATEST_TRANSFERS]: TTransferEntity[];
    [pt.SEARCH_CLUBS]: TClubEntity[];
    [pt.TEAM_TRANSFERS_ARRIVALS]: TTeamTransferEntity[];
    [pt.TEAM_TRANSFERS_DEPARTURES]: TTeamTransferEntity[];
};
