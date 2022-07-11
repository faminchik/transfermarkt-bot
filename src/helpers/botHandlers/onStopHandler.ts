import { deleteUser } from 'db/helpers';
import { sendMessageOnStop } from 'helpers/telegram/sendMessage';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onStopHandler = async (bot: TelegramBot, msg: Message): Promise<void> => {
    const id = await deleteUser(msg);
    if (!id) return;

    await sendMessageOnStop(bot, id);
};

export default onStopHandler;
