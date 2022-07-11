import { model, Schema } from 'mongoose';
import { CLUB } from 'constants/Models';
import type { Document } from 'mongoose';

export interface IClubProps {
    clubName: string;
    clubLink: string;
    country: string;
}

export type TClub = IClubProps & Document;

const ClubSchema = new Schema<TClub>({
    clubName: { type: String, required: true },
    clubLink: { type: String, required: true },
    country: { type: String, required: true }
});

export default model<TClub>(CLUB, ClubSchema);
