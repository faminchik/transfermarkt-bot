import type cdt from 'constants/transfermarkt/ConvertDataTypes';
import type tdt from 'constants/transfermarkt/TableDataTypes';
import type { TClubEntity, TTransferEntity, TTeamTransferEntity, TPlayerEntity } from 'ts/EntitiesTS';

type Handler = (arg: string[]) => string[];

export type TConvertDataConfig = {
    [cdt.ALL_LATEST_TRANSFERS]: TConvertDataConfigItemAllLatestTransfers;
    [cdt.CLUBS_SEARCH]: TConvertDataConfigItemClubsSearch;
    [cdt.PLAYERS_SEARCH]: TConvertDataConfigItemPlayersSearch;
    [cdt.TEAM_TRANSFERS]: TConvertDataConfigItemTeamTransfers;
};

export type TConvertDataConfigElement =
    | TConvertDataConfigElementAllLatestTransfers
    | TConvertDataConfigElementClubsSearch
    | TConvertDataConfigElementPlayersSearch
    | TConvertDataConfigElementTeamTransfers;

// START: @AllLatestTransfers
type TConvertDataConfigItemAllLatestTransfers = {
    [key in tdt]: TConvertDataConfigElementAllLatestTransfers;
};

type TConvertDataConfigElementAllLatestTransfers = {
    [param: number]: {
        key: keyof TTransferEntity;
        handler?: Handler;
    };
};
// --- END: @AllLatestTransfers

// START: @ClubsSearch
type TConvertDataConfigItemClubsSearch = {
    [key in tdt]: TConvertDataConfigElementClubsSearch;
};

type TConvertDataConfigElementClubsSearch = {
    [param: number]: {
        key: keyof TClubEntity;
        handler?: Handler;
    };
};
// --- END: @ClubsSearch

// START: @PlayersSearch
type TConvertDataConfigItemPlayersSearch = {
    [key in tdt]: TConvertDataConfigElementPlayersSearch;
};

type TConvertDataConfigElementPlayersSearch = {
    [param: number]: {
        key: keyof TPlayerEntity;
        handler?: Handler;
    };
};
// --- END: @PlayersSearch

// START: @TeamTransfers
type TConvertDataConfigItemTeamTransfers = {
    [key in tdt]: TConvertDataConfigElementTeamTransfers;
};

type TConvertDataConfigElementTeamTransfers = {
    [param: number]: {
        key: keyof TTeamTransferEntity;
        handler?: Handler;
    };
};
// --- END: @TeamTransfers
