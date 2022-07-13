import { deleteUser } from 'db/helpers/users';
import { sendMessageOnStop } from 'helpers/telegram/sendMessage';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onStopHandler = async (bot: TelegramBot, msg: Message): Promise<void> => {
    const user = await deleteUser(msg);
    const { chatId } = user ?? {};
    if (!chatId) return;

    await sendMessageOnStop(bot, chatId);
};

export default onStopHandler;
