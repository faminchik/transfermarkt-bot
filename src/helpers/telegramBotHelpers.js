import { BLOCKED, ERROR, SUCCESS } from '../constants/statuses';
import emoji from '../constants/emoji';
import flags from '../constants/flags';

export const sendTransferMessage = async (botClient, chatId, transferInfo, isNew = true) => {
    const {
        name,
        marketValue,
        leftTeam,
        joinedTeam,
        fee,
        transferDate,
        age,
        nationality
    } = transferInfo;

    const additionalInfo = isNew ? '' : '\r\n(transfer info has been updated)';

    let flag = '';
    const flagEmojiKey = flags[nationality];

    if (flagEmojiKey) {
        const flagEmoji = emoji[flagEmojiKey];

        if (flagEmoji) flag = `${flagEmoji} `;
    }

    return await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            `*${transferDate}*\r\n${flag}*${name}* (${marketValue} | ${age} y.o.)\r\n\r\n*${leftTeam}* → *${joinedTeam}*\r\n*${fee}*${additionalInfo}`,
            { parse_mode: 'Markdown' }
        )
        .then(res => SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? BLOCKED : ERROR));
};
