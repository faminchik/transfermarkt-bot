import _ from 'lodash';
import TelegramBot, { SendMessageOptions, Chat, Message } from 'node-telegram-bot-api';
import Status from 'constants/Statuses';

export const sendMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    message: string,
    options: SendMessageOptions = {}
): Promise<Partial<Message> & { status: Status }> =>
    botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            message,
            { parse_mode: 'Markdown', ...options }
        )
        .then(messageData => ({ ...messageData, status: Status.SUCCESS }))
        .catch(err =>
            err.response && err.response.statusCode === 403 ? { status: Status.BLOCKED } : { status: Status.ERROR }
        );

export const deleteMessage = (botClient: TelegramBot, chatId: Chat['id'], messageId: Message['message_id']) =>
    botClient.deleteMessage(chatId, _.toString(messageId)).catch(() => false);
