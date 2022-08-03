import User from 'models/User';
import type { Message } from 'node-telegram-bot-api';
import type { TUserModel } from 'ts/ModelsTS';

export const insertUser = async (msg: Message): Promise<TUserModel | null> => {
    const { chat, from, date, text: command } = msg;
    const { id: chatId, type: chatType } = chat;

    const user = await User.findOne({ chatId });
    if (user) return null;

    const chatFirstName = chat.first_name ?? '';
    const chatLastName = chat.last_name ?? '';
    const chatUserName = chat.username ?? '';

    const fromId = from?.id ?? null;
    const fromIsBot = from?.is_bot ?? false;
    const fromFirstName = from?.first_name ?? '';
    const fromLastName = from?.last_name ?? '';
    const fromUserName = from?.username ?? '';
    const fromLanguageCode = from?.language_code ?? '';

    try {
        const newUser = await User.create({
            chatId,
            chatType,
            chatFirstName,
            chatLastName,
            chatUserName,
            fromId,
            fromIsBot,
            fromFirstName,
            fromLastName,
            fromUserName,
            fromLanguageCode,
            date,
            command
        });

        console.info('add', newUser.chatId, newUser.chatFirstName, newUser.chatLastName, newUser.chatUserName);
        return newUser;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const deleteUser = async (msg: Message): Promise<TUserModel | null> => {
    const {
        chat: { id: chatId }
    } = msg;

    const user = await User.findOneAndDelete({ chatId });
    if (!user) return null;

    console.info('remove', user.chatId, user.chatFirstName, user.chatLastName, user.chatUserName);
    return user;
};

export const deleteUsersByChatIds = async (ids: number[]): Promise<boolean> => {
    const { acknowledged } = await User.deleteMany({ chatId: { $in: ids } });
    return acknowledged;
};

export const fetchUsersIds = async (): Promise<number[]> => {
    const users = await User.find().select(['chatId']);

    return users.map((item) => item.chatId);
};

export const fetchUserCount = async (): Promise<number> => {
    return User.countDocuments();
};
