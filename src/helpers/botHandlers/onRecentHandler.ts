import { getRecentTransfers } from 'db/utils';
import { sendJoinedTransferMessages } from 'helpers/telegram/sendMessage';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onRecentHandler = async (bot: TelegramBot, msg: Message): Promise<void> => {
    const chatId = msg.chat.id;

    const recentTransfers = await getRecentTransfers();
    await sendJoinedTransferMessages(bot, chatId, recentTransfers);
};

export default onRecentHandler;
