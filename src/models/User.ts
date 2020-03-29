import { createSchema, Type, typedModel } from 'ts-mongoose';
import { USER } from 'constants/Models';

export const UserSchema = createSchema({
    chatId: Type.number({ required: true }),

    chatFirstName: Type.string(),

    chatLastName: Type.string(),

    chatUserName: Type.string(),

    chatType: Type.string(),

    fromId: Type.number(),

    fromIsBot: Type.boolean(),

    fromFirstName: Type.string(),

    fromLastName: Type.string(),

    fromUserName: Type.string(),

    fromLanguageCode: Type.string(),

    date: Type.number(),

    command: Type.string()
});

export default typedModel(USER, UserSchema);
