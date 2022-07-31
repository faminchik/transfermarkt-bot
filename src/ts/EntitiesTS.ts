import type { ITransferProps } from 'models/Transfer';
import type { IClubProps } from 'models/Club';
import type { IPlayerProps } from 'models/Player';

// START: @Latest Transfer
type TTransferEntityAdditions = {
    profileLink: string;
};

export type TTransferEntity = ITransferProps & TTransferEntityAdditions;

type TTransferFullEntityAdditions = {
    highestMarketValue: string;
};

export type TTransferFullEntity = TTransferEntity & TTransferFullEntityAdditions;
// --- END: @Latest Transfer

// START: @Club
export type TClubEntity = IClubProps & {
    totalMarketValue: string;
};
// --- END: @Club

// START: @Player
export type TPlayerEntity = IPlayerProps;
// --- END: @Player

// START: @Team Transfer
export type TTeamTransferEntity = {
    name: string;
    age: string;
    nationality: string;
    secondPartyTeam: string;
    secondPartyTeamCountry?: string;
    marketValue: string;
    fee: string;
};
// --- END: @Team Transfer

// START: @Player Transfer
export type TPlayerTransferEntity = {
    season: string;
    date: string;
    leftTeam: string;
    joinedTeam: string;
    leftTeamCountry?: string;
    joinedTeamCountry?: string;
    marketValue: string;
    fee: string;
};
// --- END: @Player Transfer
