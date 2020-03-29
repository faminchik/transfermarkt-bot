import { createSchema, Type, typedModel } from 'ts-mongoose';
import { TRANSFER } from 'constants/Models';

export const TransferSchema = createSchema({
    name: Type.string({ required: true }),

    age: Type.string({ required: true }),

    nationality: Type.string({ required: true }),

    leftTeam: Type.string({ required: true }),

    joinedTeam: Type.string({ required: true }),

    leftTeamCountry: Type.string(),

    joinedTeamCountry: Type.string(),

    transferDate: Type.string({ required: true }),

    marketValue: Type.string({ required: true }),

    fee: Type.string({ required: true })
});

export default typedModel(TRANSFER, TransferSchema);
