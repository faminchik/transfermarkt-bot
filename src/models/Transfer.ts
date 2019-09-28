import { createSchema, Type, typedModel } from 'ts-mongoose';
import { TRANSFER } from 'constants/Models';

export const TransferSchema = createSchema({
    name: Type.string(),

    age: Type.string(),

    nationality: Type.string(),

    leftTeam: Type.string(),

    joinedTeam: Type.string(),

    leftTeamCountry: Type.optionalString(),

    joinedTeamCountry: Type.optionalString(),

    transferDate: Type.string(),

    marketValue: Type.string(),

    fee: Type.string()
});

export default typedModel(TRANSFER, TransferSchema);
