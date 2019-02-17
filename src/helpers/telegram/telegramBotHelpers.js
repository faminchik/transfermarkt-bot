import _ from 'lodash';
import BPromise from 'bluebird';
import { formTransferMessage, joinTransferMessages } from 'helpers/telegram/formMessageHelper';
import { BLOCKED, ERROR, SUCCESS } from 'constants/statuses';

const sendMessage = async (botClient, chatId, message) =>
    await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            message,
            { parse_mode: 'Markdown' }
        )
        .then(res => SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? BLOCKED : ERROR));

export const sendTransferMessage = async (botClient, chatId, transferInfo, isNewTransfer) => {
    const message = formTransferMessage(transferInfo, isNewTransfer);

    return await sendMessage(botClient, chatId, message);
};

export const sendJoinedTransferMessages = async (botClient, chatId, transfers) => {
    const transfersMessages = _.map(transfers, transferInfo => formTransferMessage(transferInfo));

    const messages = joinTransferMessages(transfersMessages);

    await BPromise.each(messages, async message => await sendMessage(botClient, chatId, message));
};
