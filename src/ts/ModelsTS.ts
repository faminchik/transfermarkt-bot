import type { ExtractDoc } from 'ts-mongoose';
import type { UserSchema } from 'models/User';
import type { TransferSchema } from 'models/Transfer';
import type { ClubSchema } from 'models/Club';

export type TUserModel = ExtractDoc<typeof UserSchema>;

export type TTransferModel = ExtractDoc<typeof TransferSchema>;

export type TClubModel = ExtractDoc<typeof ClubSchema>;
