import { sendMessage } from 'helpers/telegram/apiHelpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Chat } from 'node-telegram-bot-api';

export const sendMessageOnStart = (botClient: TelegramBot, chatId: Chat['id']) => {
    const START_MESSAGE = `You've been successfully subscribed`;

    return sendMessage(botClient, chatId, START_MESSAGE);
};
export const sendMessageOnStop = (botClient: TelegramBot, chatId: Chat['id']) => {
    const STOP_MESSAGE = `You've been successfully unsubscribed`;

    return sendMessage(botClient, chatId, STOP_MESSAGE);
};
