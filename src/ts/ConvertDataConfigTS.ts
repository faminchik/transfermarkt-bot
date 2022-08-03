import type cdt from 'constants/transfermarkt/ConvertDataTypes';
import type tdt from 'constants/transfermarkt/TableDataTypes';
import type {
    TClubEntity,
    TTransferEntity,
    TTeamTransferEntity,
    TPlayerEntity,
    TPlayerTransferEntity
} from 'ts/EntitiesTS';
import type { ValueOf } from 'ts/UtilsTS';

export type TConvertDataConfig = {
    [cdt.ALL_LATEST_TRANSFERS]: TConvertDataAllLatestTransfersItem;
    [cdt.CLUBS_SEARCH]: TConvertDataClubsSearchItem;
    [cdt.PLAYERS_SEARCH]: TConvertDataPlayersSearchItem;
    [cdt.TEAM_TRANSFERS]: TConvertDataTeamTransfersItem;
    [cdt.PLAYER_TRANSFERS_HISTORY]: TConvertDataPlayerTransfersItem;
};

export type TConvertDataConfigElement = ValueOf<ValueOf<TConvertDataConfig>>;

type TConvertDataItem<T> = {
    [key in tdt]: {
        [param: number]: {
            key: keyof T;
            handler?: (arg: string[]) => string[];
        };
    };
};

// START: @AllLatestTransfers
type TConvertDataAllLatestTransfersItem = TConvertDataItem<TTransferEntity>;
// --- END: @AllLatestTransfers

// START: @ClubsSearch
type TConvertDataClubsSearchItem = TConvertDataItem<TClubEntity>;
// --- END: @ClubsSearch

// START: @PlayersSearch
type TConvertDataPlayersSearchItem = TConvertDataItem<TPlayerEntity>;
// --- END: @PlayersSearch

// START: @TeamTransfers
type TConvertDataTeamTransfersItem = TConvertDataItem<TTeamTransferEntity>;
// --- END: @TeamTransfers

// START: @PlayerTransfers
type TConvertDataPlayerTransfersItem = TConvertDataItem<TPlayerTransferEntity>;
// --- END: @PlayerTransfers
