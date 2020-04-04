import _ from 'lodash';
import BPromise from 'bluebird';
import TelegramBot, { SendMessageOptions, Chat, Message } from 'node-telegram-bot-api';
import {
    formTransferMessage,
    formTeamTransferMessage,
    formTeamTransferHeader,
    joinMessages,
    formClubsSearchResultMessage
} from 'helpers/telegram/formMessageHelper';
import { sendMessage, deleteMessage } from 'helpers/telegram/apiHelpers';
import { formClubsSearchResultButtons } from 'helpers/telegram/formButtonsForKeyboard';
import { formInlineKeyboard } from 'helpers/telegram/formKeyboards';
import { TTransferFullEntity, TClubEntity, TTeamTransferEntity } from 'ts/types/Entities.types';
import { TClubModel, TTransferModel } from 'ts/types/Models.types';

const joinAndSendMessages = (botClient: TelegramBot, chatId: Chat['id'], messages: string[], header?: string) => {
    const joinedMessages = joinMessages(messages, header);

    return BPromise.mapSeries(joinedMessages, msg => sendMessage(botClient, chatId, msg));
};

export const sendTransferMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    transferInfo: TTransferFullEntity,
    isNewTransfer: boolean
) => {
    const message = formTransferMessage(transferInfo, isNewTransfer);

    return sendMessage(botClient, chatId, message);
};

export const sendJoinedTransferMessages = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    transfers: TTransferModel[]
) => {
    const transfersMessages = _.map(transfers, transferInfo => formTransferMessage(transferInfo));

    await joinAndSendMessages(botClient, chatId, transfersMessages);
};

// TODO make this method more general (not only for clubs)
export const sendClubsSearchResultWithOptions = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    searchResult: TClubEntity[]
) => {
    const message = formClubsSearchResultMessage(searchResult);
    const keyboardButtons = formClubsSearchResultButtons(searchResult);

    const options: SendMessageOptions = { ...formInlineKeyboard(keyboardButtons) };
    return sendMessage(botClient, chatId, message, options);
};

export const sendTeamTransfersMessages = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    {
        teamTransfersArrivals,
        teamTransfersDepartures,
        clubInfo
    }: {
        teamTransfersArrivals: TTeamTransferEntity[];
        teamTransfersDepartures: TTeamTransferEntity[];
        clubInfo: TClubEntity | TClubModel;
    }
) => {
    const arrivalsMessages = _.map(teamTransfersArrivals, (info: TTeamTransferEntity, index) =>
        formTeamTransferMessage(info, '← ', index + 1)
    );
    const arrivalsHeader = formTeamTransferHeader(clubInfo, 'Arrivals');

    const departuresMessages = _.map(teamTransfersDepartures, (info: TTeamTransferEntity, index) =>
        formTeamTransferMessage(info, '→ ', index + 1)
    );
    const departuresHeader = formTeamTransferHeader(clubInfo, 'Departures');

    const arrivalMessagesResult = await joinAndSendMessages(botClient, chatId, arrivalsMessages, arrivalsHeader);
    const departureMessagesResult = await joinAndSendMessages(botClient, chatId, departuresMessages, departuresHeader);

    return _.concat(arrivalMessagesResult, departureMessagesResult);
};

export const sendMessageOnStart = async (botClient: TelegramBot, chatId: Chat['id']) => {
    const START_MESSAGE = `You've been successfully subscribed`;

    await sendMessage(botClient, chatId, START_MESSAGE);
};
export const sendMessageOnStop = async (botClient: TelegramBot, chatId: Chat['id']) => {
    const STOP_MESSAGE = `You've been successfully unsubscribed`;

    await sendMessage(botClient, chatId, STOP_MESSAGE);
};

export const deleteMessages = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    messageId: Message['message_id'] | Message['message_id'][]
) => {
    const messageIds = _.castArray<Message['message_id']>(messageId);

    return BPromise.map(messageIds, msgId => deleteMessage(botClient, chatId, msgId));
};
