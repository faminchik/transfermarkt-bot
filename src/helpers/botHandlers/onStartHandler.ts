import { sendMessageOnStart } from 'helpers/telegram/sendMessage';
import { insertUser } from 'db/helpers/users';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onStartHandler = async (bot: TelegramBot, msg: Message): Promise<void> => {
    const user = await insertUser(msg);
    const { chatId } = user ?? {};
    if (!chatId) return;

    await sendMessageOnStart(bot, chatId);
};

export default onStartHandler;
