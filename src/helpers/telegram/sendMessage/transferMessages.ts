import { formTransferMessage } from 'helpers/telegram/formMessageHelper';
import { sendMessage } from 'helpers/telegram/apiHelpers';
import { sendJoinedMessages } from 'helpers/telegram/sendMessage/helpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Chat } from 'node-telegram-bot-api';
import type { TTransferFullEntity } from 'ts/EntitiesTS';
import type { TTransferModel } from 'ts/ModelsTS';

export const sendTransferMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    transferInfo: TTransferFullEntity,
    isNewTransfer: boolean
) => {
    const message = formTransferMessage(transferInfo, isNewTransfer);

    return sendMessage(botClient, chatId, message);
};

export const sendJoinedTransferMessages = (botClient: TelegramBot, chatId: Chat['id'], transfers: TTransferModel[]) => {
    const transferMessages = transfers.map((transferInfo) => formTransferMessage(transferInfo));

    return sendJoinedMessages(botClient, chatId, transferMessages);
};
