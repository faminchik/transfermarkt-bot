import { createSchema, Type, typedModel } from 'ts-mongoose';
import { CLUB } from 'constants/Models';

export const ClubSchema = createSchema({
    clubName: Type.string({ required: true }),

    clubLink: Type.string({ required: true }),

    country: Type.string(),

    totalMarketValue: Type.string()
});

export default typedModel(CLUB, ClubSchema);
