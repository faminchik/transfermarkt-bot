import { createSchema, Type, typedModel } from 'ts-mongoose';
import { USER } from 'constants/Models';

export const UserSchema = createSchema({
    chatId: Type.number(),

    chatFirstName: Type.optionalString(),

    chatLastName: Type.optionalString(),

    chatUserName: Type.optionalString(),

    chatType: Type.optionalString(),

    fromId: Type.optionalNumber(),

    fromIsBot: Type.optionalBoolean(),

    fromFirstName: Type.optionalString(),

    fromLastName: Type.optionalString(),

    fromUserName: Type.optionalString(),

    fromLanguageCode: Type.optionalString(),

    date: Type.optionalNumber(),

    command: Type.optionalString()
});

export default typedModel(USER, UserSchema);
