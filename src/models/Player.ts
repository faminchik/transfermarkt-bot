import { model, Schema } from 'mongoose';
import { PLAYER } from 'constants/Models';
import type { Document } from 'mongoose';

export interface IPlayerProps {
    name: string;
    age: string;
    nationality: string;
    marketValue: string;
    clubName: string;
    playerLink: string;
}

export type TPlayer = IPlayerProps & Document;

const PlayerSchema = new Schema<TPlayer>({
    name: { type: String, required: true },
    age: { type: String, required: true },
    nationality: { type: String, required: true },
    marketValue: { type: String, required: true },
    clubName: { type: String, required: true },
    playerLink: { type: String, required: true }
});

export default model<TPlayer>(PLAYER, PlayerSchema);
