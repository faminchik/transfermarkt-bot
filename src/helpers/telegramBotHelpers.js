import { BLOCKED, ERROR, SUCCESS } from '../constants/statuses';

export const sendTransferMessage = async (botClient, chatId, transferInfo, isNew = true) => {
    const { name, marketValue, leftTeam, joinedTeam, fee, transferDate } = transferInfo;

    const additionalInfo = isNew ? '' : '\r\n(transfer info has been updated)';

    return await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            `*${transferDate}*\r\n*${name}* (${marketValue})\r\n\r\n*${leftTeam}* → *${joinedTeam}*\r\n*${fee}*${additionalInfo}`,
            { parse_mode: 'Markdown' }
        )
        .then(res => SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? BLOCKED : ERROR));
};
