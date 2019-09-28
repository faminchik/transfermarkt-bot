import { ExtractProps } from 'ts-mongoose';
import { TransferSchema } from 'models/Transfer';
import { ClubSchema } from 'models/Club';

// START: @Latest Transfer
type TTransferEntityAdditions = {
    profileLink: string;
};

export type TTransferEntity = ExtractProps<typeof TransferSchema> & TTransferEntityAdditions;

type TTransferFullEntityAdditions = {
    highestMarketValue: string;
};

export type TTransferFullEntity = TTransferEntity & TTransferFullEntityAdditions;
// --- END: @Latest Transfer

// START: @Club
export type TClubEntity = ExtractProps<typeof ClubSchema>;
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
