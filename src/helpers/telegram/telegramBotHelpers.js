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
import { BLOCKED, ERROR, SUCCESS } from 'constants/statuses';

/* eslint @typescript-eslint/camelcase: 0 */

const sendMessage = async (botClient, chatId, message, options = {}) =>
    await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            message,
            { parse_mode: 'Markdown', ...options }
        )
        .then(() => SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? BLOCKED : ERROR));

const joinAndSendMessages = async (botClient, chatId, messages, header) => {
    const joinedMessages = joinMessages(messages, header);

    await BPromise.each(joinedMessages, async msg => await sendMessage(botClient, chatId, msg));
};

export const sendTransferMessage = async (botClient, chatId, transferInfo, isNewTransfer) => {
    const message = formTransferMessage(transferInfo, isNewTransfer);

    return await sendMessage(botClient, chatId, message);
};

export const sendJoinedTransferMessages = async (botClient, chatId, transfers) => {
    const transfersMessages = _.map(transfers, transferInfo => formTransferMessage(transferInfo));

    await joinAndSendMessages(botClient, chatId, transfersMessages);
};

// TODO make this method more general (not only for clubs)
export const sendClubsSearchResultWithOptions = async (botClient, chatId, searchResult) => {
    const message = formClubsSearchResultMessage(searchResult);
    const keyboardButtons = formClubsSearchResultButtons(searchResult);

    const options = { ...formInlineKeyboard(keyboardButtons) };
    await sendMessage(botClient, chatId, message, options);
};

export const sendTeamTransfersMessages = async (botClient, chatId, { teamTransfers, clubInfo }) => {
    const { teamTransfersArrivals, teamTransfersDepartures } = teamTransfers;

    const arrivalsMessages = _.map(teamTransfersArrivals, (info, index) =>
        formTeamTransferMessage(info, '← ', index + 1)
    );
    const arrivalsHeader = formTeamTransferHeader(clubInfo, 'Arrivals');

    const departuresMessages = _.map(teamTransfersDepartures, (info, index) =>
        formTeamTransferMessage(info, '→ ', index + 1)
    );
    const departuresHeader = formTeamTransferHeader(clubInfo, 'Departures');

    await joinAndSendMessages(botClient, chatId, arrivalsMessages, arrivalsHeader);
    await joinAndSendMessages(botClient, chatId, departuresMessages, departuresHeader);
};

export const sendMessageOnStart = async (botClient, chatId) => {
    const START_MESSAGE = `You've been successfully subscribed`;

    await sendMessage(botClient, chatId, START_MESSAGE);
};
export const sendMessageOnStop = async (botClient, chatId) => {
    const STOP_MESSAGE = `You've been successfully unsubscribed`;

    await sendMessage(botClient, chatId, STOP_MESSAGE);
};
