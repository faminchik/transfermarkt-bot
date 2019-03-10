import { Schema, model } from 'mongoose';
import { CLUB } from 'constants/models';

const ClubSchema = new Schema({
    clubName: {
        type: String,
        required: true
    },
    clubLink: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    totalMarketValue: {
        type: String
    }
});

export default model(CLUB, ClubSchema);
