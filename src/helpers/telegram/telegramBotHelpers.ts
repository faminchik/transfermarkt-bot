import _ from 'lodash';
import BPromise from 'bluebird';
import TelegramBot, { SendMessageOptions, Chat } from 'node-telegram-bot-api';
import {
    formTransferMessage,
    formTeamTransferMessage,
    formTeamTransferHeader,
    joinMessages,
    formClubsSearchResultMessage
} from 'helpers/telegram/formMessageHelper';
import { formClubsSearchResultButtons } from 'helpers/telegram/formButtonsForKeyboard';
import { formInlineKeyboard } from 'helpers/telegram/formKeyboards';
import Status from 'constants/Statuses';
import { TTransferFullEntity, TClubEntity, TTeamTransferEntity } from 'ts/types/Entities.types';
import { TClubModel, TTransferModel } from 'ts/types/Models.types';

// /* eslint @typescript-eslint/camelcase: 0 */

const sendMessage = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    message: string,
    options: SendMessageOptions = {}
) =>
    await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            message,
            { parse_mode: 'Markdown', ...options }
        )
        .then(() => Status.SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? Status.BLOCKED : Status.ERROR));

const joinAndSendMessages = async (botClient: TelegramBot, chatId: Chat['id'], messages: string[], header?: string) => {
    const joinedMessages = joinMessages(messages, header);

    await BPromise.each(joinedMessages, async msg => await sendMessage(botClient, chatId, msg));
};

export const sendTransferMessage = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    transferInfo: TTransferFullEntity,
    isNewTransfer: boolean
) => {
    const message = formTransferMessage(transferInfo, isNewTransfer);

    return await sendMessage(botClient, chatId, message);
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
export const sendClubsSearchResultWithOptions = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    searchResult: TClubEntity[]
) => {
    const message = formClubsSearchResultMessage(searchResult);
    const keyboardButtons = formClubsSearchResultButtons(searchResult);

    const options = { ...formInlineKeyboard(keyboardButtons) };
    await sendMessage(botClient, chatId, message, options);
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

    await joinAndSendMessages(botClient, chatId, arrivalsMessages, arrivalsHeader);
    await joinAndSendMessages(botClient, chatId, departuresMessages, departuresHeader);
};

export const sendMessageOnStart = async (botClient: TelegramBot, chatId: Chat['id']) => {
    const START_MESSAGE = `You've been successfully subscribed`;

    await sendMessage(botClient, chatId, START_MESSAGE);
};
export const sendMessageOnStop = async (botClient: TelegramBot, chatId: Chat['id']) => {
    const STOP_MESSAGE = `You've been successfully unsubscribed`;

    await sendMessage(botClient, chatId, STOP_MESSAGE);
};
