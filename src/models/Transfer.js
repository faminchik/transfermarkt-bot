import { Schema, model } from 'mongoose';
import { TRANSFER } from '../constants/models';

const TransferSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    leftTeam: {
        type: String,
        required: true
    },
    joinedTeam: {
        type: String,
        required: true
    },
    transferDate: {
        type: String,
        required: true
    },
    marketValue: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    }
});

export default model(TRANSFER, TransferSchema);
