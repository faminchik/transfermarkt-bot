import { createSchema, Type, typedModel } from 'ts-mongoose';
import { CLUB } from 'constants/Models';

export const ClubSchema = createSchema({
    clubName: Type.string(),

    clubLink: Type.string(),

    country: Type.optionalString(),

    totalMarketValue: Type.optionalString()
});

export default typedModel(CLUB, ClubSchema);
