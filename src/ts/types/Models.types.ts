import { ExtractDoc } from 'ts-mongoose';
import { UserSchema } from 'models/User';
import { TransferSchema } from 'models/Transfer';
import { ClubSchema } from 'models/Club';

export type TUserModel = ExtractDoc<typeof UserSchema>;

export type TTransferModel = ExtractDoc<typeof TransferSchema>;

export type TClubModel = ExtractDoc<typeof ClubSchema>;
