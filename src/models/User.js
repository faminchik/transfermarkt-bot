import { Schema, model } from 'mongoose';
import { USER } from '../constants/models';

const UserSchema = new Schema({
    chatId: {
        type: Number,
        required: true
    },
    chatFirstName: {
        type: String,
        required: true,
        default: ''
    },
    chatLastName: {
        type: String,
        required: true,
        default: ''
    },
    chatUserName: {
        type: String,
        required: true,
        default: ''
    },
    chatType: {
        type: String,
        required: true
    },
    fromId: {
        type: Number,
        required: true
    },
    fromIsBot: {
        type: Boolean,
        required: true
    },
    fromFirstName: {
        type: String,
        required: true,
        default: ''
    },
    fromLastName: {
        type: String,
        required: true,
        default: ''
    },
    fromUserName: {
        type: String,
        required: true,
        default: ''
    },
    fromLanguageCode: {
        type: String,
        required: true,
        default: ''
    },
    date: {
        type: Number,
        required: true
    },
    command: {
        type: String,
        required: true
    }
});

export default model(USER, UserSchema);
