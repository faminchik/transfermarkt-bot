import type { ExtractShortProps } from 'ts-mongoose';
import type { TransferSchema } from 'models/Transfer';
import type { ClubSchema } from 'models/Club';

// START: @Latest Transfer
type TTransferEntityAdditions = {
    profileLink: string;
};

export type TTransferEntity = ExtractShortProps<typeof TransferSchema> & TTransferEntityAdditions;

type TTransferFullEntityAdditions = {
    highestMarketValue: string;
};

export type TTransferFullEntity = TTransferEntity & TTransferFullEntityAdditions;
// --- END: @Latest Transfer

// START: @Club
export type TClubEntity = ExtractShortProps<typeof ClubSchema>;
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
