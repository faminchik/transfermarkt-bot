import { sendMessageOnStart } from 'helpers/telegram/sendMessage';
import { addUser } from 'db/helpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onStartHandler = async (bot: TelegramBot, msg: Message): Promise<void> => {
    const id = await addUser(msg);
    if (!id) return;

    await sendMessageOnStart(bot, id);
};

export default onStartHandler;
