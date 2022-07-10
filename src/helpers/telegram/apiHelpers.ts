import Status from 'constants/Statuses';
import type TelegramBot from 'node-telegram-bot-api';
import type { SendMessageOptions, SendPhotoOptions, Chat, Message } from 'node-telegram-bot-api';

export const sendMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    message: string,
    options: SendMessageOptions = {}
): Promise<Partial<Message> & { status: Status }> => {
    return botClient
        .sendMessage(chatId, message, { parse_mode: 'Markdown', ...options })
        .then(messageData => ({ ...messageData, status: Status.SUCCESS }))
        .catch(err =>
            err.response && err.response.statusCode === 403 ? { status: Status.BLOCKED } : { status: Status.ERROR }
        );
};

export const sendPhoto = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    photoSrc: string,
    options: SendPhotoOptions = {}
): Promise<Partial<Message> & { status: Status }> => {
    return botClient
        .sendPhoto(chatId, photoSrc, { parse_mode: 'Markdown', ...options })
        .then(messageData => ({ ...messageData, status: Status.SUCCESS }))
        .catch(err =>
            err.response && err.response.statusCode === 403 ? { status: Status.BLOCKED } : { status: Status.ERROR }
        );
};
