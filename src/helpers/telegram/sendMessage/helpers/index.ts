import BPromise from 'bluebird';
import { joinMessages } from 'helpers/telegram/formMessageHelper';
import { sendMessage } from 'helpers/telegram/apiHelpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Chat } from 'node-telegram-bot-api';

export const sendJoinedMessages = (botClient: TelegramBot, chatId: Chat['id'], messages: string[], header?: string) => {
    const joinedMessages = joinMessages(messages, header);

    return BPromise.mapSeries(joinedMessages, (msg) => sendMessage(botClient, chatId, msg));
};
