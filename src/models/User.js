import { Schema, model } from 'mongoose';
import { USER } from '../constants/models';

const UserSchema = new Schema({
    chatId: {
        type: Number,
        required: true
    },
    chatFirstName: {
        type: String
    },
    chatLastName: {
        type: String
    },
    chatUserName: {
        type: String
    },
    chatType: {
        type: String
    },
    fromId: {
        type: Number
    },
    fromIsBot: {
        type: Boolean
    },
    fromFirstName: {
        type: String
    },
    fromLastName: {
        type: String
    },
    fromUserName: {
        type: String
    },
    fromLanguageCode: {
        type: String
    },
    date: {
        type: Number
    },
    command: {
        type: String
    }
});

export default model(USER, UserSchema);
