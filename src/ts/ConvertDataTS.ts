import type pt from 'constants/transfermarkt/ParsingTypes';
import type {
    TTransferEntity,
    TClubEntity,
    TPlayerEntity,
    TTeamTransferEntity,
    TPlayerTransferEntity
} from 'ts/EntitiesTS';

export type TConvertedDataMapper = {
    [pt.ALL_LATEST_TRANSFERS]: TTransferEntity[];
    [pt.SEARCH_CLUBS]: TClubEntity[];
    [pt.SEARCH_PLAYERS]: TPlayerEntity[];
    [pt.TEAM_TRANSFERS_ARRIVALS]: TTeamTransferEntity[];
    [pt.TEAM_TRANSFERS_DEPARTURES]: TTeamTransferEntity[];
    [pt.PLAYER_TRANSFERS_HISTORY]: TPlayerTransferEntity[];
};
