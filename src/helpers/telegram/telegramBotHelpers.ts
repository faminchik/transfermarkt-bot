import _ from 'lodash';
import BPromise from 'bluebird';
import {
    formTransferMessage,
    formTeamTransferMessage,
    formTeamTransferHeader,
    joinMessages,
    formClubsSearchResultMessage
} from 'helpers/telegram/formMessageHelper';
import { formClubsSearchResultButtons } from 'helpers/telegram/formButtonsForKeyboard';
import { formInlineKeyboard } from 'helpers/telegram/formKeyboards';
import { sendMessage, sendPhoto } from 'helpers/telegram/apiHelpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { SendMessageOptions, Chat } from 'node-telegram-bot-api';
import type { TTransferFullEntity, TClubEntity, TTeamTransferEntity } from 'ts/EntitiesTS';
import type { TClubModel, TTransferModel } from 'ts/ModelsTS';

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
    const { photoSrc } = transferInfo;

    if (photoSrc.length !== 0) {
        return sendPhoto(botClient, chatId, photoSrc, { caption: message });
    }

    return sendMessage(botClient, chatId, message);
};

export const sendJoinedTransferMessages = (botClient: TelegramBot, chatId: Chat['id'], transfers: TTransferModel[]) => {
    const transfersMessages = _.map(transfers, transferInfo => formTransferMessage(transferInfo));

    return joinAndSendMessages(botClient, chatId, transfersMessages);
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

export const sendMessageOnStart = (botClient: TelegramBot, chatId: Chat['id']) => {
    const START_MESSAGE = `You've been successfully subscribed`;

    return sendMessage(botClient, chatId, START_MESSAGE);
};
export const sendMessageOnStop = (botClient: TelegramBot, chatId: Chat['id']) => {
    const STOP_MESSAGE = `You've been successfully unsubscribed`;

    return sendMessage(botClient, chatId, STOP_MESSAGE);
};
