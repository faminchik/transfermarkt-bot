import { model, Schema } from 'mongoose';
import { TRANSFER } from 'constants/Models';
import type { Document } from 'mongoose';

export interface ITransferProps {
    name: string;
    age: string;
    nationality: string;
    leftTeam: string;
    joinedTeam: string;
    leftTeamCountry?: string;
    joinedTeamCountry?: string;
    transferDate: string;
    marketValue: string;
    fee: string;
    position: string;
}

export type TTransfer = ITransferProps & Document;

const TransferSchema = new Schema<TTransfer>({
    name: { type: String, required: true },
    age: { type: String, required: true },
    nationality: { type: String, required: true },
    leftTeam: { type: String, required: true },
    joinedTeam: { type: String, required: true },
    leftTeamCountry: { type: String },
    joinedTeamCountry: { type: String },
    transferDate: { type: String, required: true },
    marketValue: { type: String, required: true },
    fee: { type: String, required: true },
    position: { type: String, required: true }
});

export default model<TTransfer>(TRANSFER, TransferSchema);
