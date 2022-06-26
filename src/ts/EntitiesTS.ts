import type { ITransferProps } from 'models/Transfer';
import type { IClubProps } from 'models/Club';

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
export type TClubEntity = IClubProps;
// --- END: @Club

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
