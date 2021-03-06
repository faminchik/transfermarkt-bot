import cdt from 'constants/transfermarkt/ConvertDataTypes';
import tdt from 'constants/transfermarkt/TableDataTypes';
import { TClubEntity, TTransferEntity, TTeamTransferEntity } from 'ts/types/Entities.types';

type Handler = (arg: string[]) => string[];

export type TConvertDataConfig = {
    [cdt.ALL_LATEST_TRANSFERS]: TConvertDataConfigItemAllLatestTransfers;
    [cdt.CLUBS_SEARCH]: TConvertDataConfigItemClubsSearch;
    [cdt.TEAM_TRANSFERS]: TConvertDataConfigItemTeamTransfers;
};

export type TConvertDataConfigItem =
    | TConvertDataConfigItemAllLatestTransfers
    | TConvertDataConfigItemClubsSearch
    | TConvertDataConfigItemTeamTransfers;

export type TConvertDataConfigElement =
    | TConvertDataConfigElementAllLatestTransfers
    | TConvertDataConfigElementClubsSearch
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
