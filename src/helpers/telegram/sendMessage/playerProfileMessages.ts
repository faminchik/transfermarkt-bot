import { formPlayerTranferMessage, formPlayerTranferHistoryHeader } from 'helpers/telegram/formMessageHelper';
import { sendJoinedMessages } from 'helpers/telegram/sendMessage/helpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Chat } from 'node-telegram-bot-api';
import type { TPlayerEntity, TPlayerTransferEntity } from 'ts/EntitiesTS';
import type { TPlayerModel } from 'ts/ModelsTS';

export const sendPlayerTranferHistoryMessages = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    {
        transfersHistory,
        playerInfo
    }: {
        transfersHistory: TPlayerTransferEntity[];
        playerInfo: TPlayerEntity | TPlayerModel;
    }
) => {
    const transfersHistoryMessages = transfersHistory.map((info, index) => formPlayerTranferMessage(info, index + 1));
    const header = formPlayerTranferHistoryHeader(playerInfo);

    return sendJoinedMessages(botClient, chatId, transfersHistoryMessages, header);
};
