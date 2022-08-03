import type cdt from 'constants/transfermarkt/ConvertDataTypes';
import type tdt from 'constants/transfermarkt/TableDataTypes';
import type {
    TClubEntity,
    TTransferEntity,
    TTeamTransferEntity,
    TPlayerEntity,
    TPlayerTransferEntity
} from 'ts/EntitiesTS';

export type TConvertDataConfig = {
    [cdt.ALL_LATEST_TRANSFERS]: TConvertDataAllLatestTransfersItem;
    [cdt.CLUBS_SEARCH]: TConvertDataClubsSearchItem;
    [cdt.PLAYERS_SEARCH]: TConvertDataPlayersSearchItem;
    [cdt.TEAM_TRANSFERS]: TConvertDataTeamTransfersItem;
    [cdt.PLAYER_TRANSFERS_HISTORY]: TConvertDataPlayerTransfersItem;
};

export type TConvertDataConfigElement =
    | TConvertDataAllLatestTransfersElement
    | TConvertDataClubsSearchElement
    | TConvertDataPlayersSearchElement
    | TConvertDataTeamTransfersElement
    | TConvertDataPlayerTransfersElement;

type TConvertDataItem<T> = {
    [key in tdt]: T;
};

type TConvertDataElement<T> = {
    [param: number]: {
        key: keyof T;
        handler?: (arg: string[]) => string[];
    };
};

// START: @AllLatestTransfers
type TConvertDataAllLatestTransfersItem = TConvertDataItem<TConvertDataAllLatestTransfersElement>;

type TConvertDataAllLatestTransfersElement = TConvertDataElement<TTransferEntity>;
// --- END: @AllLatestTransfers

// START: @ClubsSearch
type TConvertDataClubsSearchItem = TConvertDataItem<TConvertDataClubsSearchElement>;

type TConvertDataClubsSearchElement = TConvertDataElement<TClubEntity>;
// --- END: @ClubsSearch

// START: @PlayersSearch
type TConvertDataPlayersSearchItem = TConvertDataItem<TConvertDataPlayersSearchElement>;

type TConvertDataPlayersSearchElement = TConvertDataElement<TPlayerEntity>;
// --- END: @PlayersSearch

// START: @TeamTransfers
type TConvertDataTeamTransfersItem = TConvertDataItem<TConvertDataTeamTransfersElement>;

type TConvertDataTeamTransfersElement = TConvertDataElement<TTeamTransferEntity>;
// --- END: @TeamTransfers

// START: @PlayerTransfers
type TConvertDataPlayerTransfersItem = TConvertDataItem<TConvertDataPlayerTransfersElement>;

type TConvertDataPlayerTransfersElement = TConvertDataElement<TPlayerTransferEntity>;
// --- END: @PlayerTransfers
