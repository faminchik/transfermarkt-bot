import { model, Schema } from 'mongoose';
import { CLUB } from 'constants/Models';
import type { Document } from 'mongoose';

export interface IClubProps {
    clubName: string;
    clubLink: string;
    country?: string;
    totalMarketValue?: string;
}

export type TClub = IClubProps & Document;

const ClubSchema = new Schema<TClub>({
    clubName: { type: String, required: true },
    clubLink: { type: String, required: true },
    country: { type: String },
    totalMarketValue: { type: String }
});

export default model<TClub>(CLUB, ClubSchema);
