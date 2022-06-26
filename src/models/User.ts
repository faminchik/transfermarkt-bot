import { model, Schema } from 'mongoose';
import { USER } from 'constants/Models';
import type { Document } from 'mongoose';

export interface IUserProps {
    chatId: number;
    chatFirstName?: string;
    chatLastName?: string;
    chatUserName?: string;
    chatType?: string;
    fromId?: number;
    fromIsBot?: boolean;
    fromFirstName?: string;
    fromLastName?: string;
    fromUserName?: string;
    fromLanguageCode?: string;
    date?: number;
    command?: string;
}

export type TUser = IUserProps & Document;

const UserSchema = new Schema<TUser>({
    chatId: { type: Number, required: true },
    chatFirstName: { type: String },
    chatLastName: { type: String },
    chatUserName: { type: String },
    chatType: { type: String },
    fromId: { type: Number },
    fromIsBot: { type: Boolean },
    fromFirstName: { type: String },
    fromLastName: { type: String },
    fromUserName: { type: String },
    fromLanguageCode: { type: String },
    date: { type: Number },
    command: { type: String }
});

export default model<TUser>(USER, UserSchema);
