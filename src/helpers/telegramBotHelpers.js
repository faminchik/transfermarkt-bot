import { BLOCKED, ERROR, SUCCESS } from 'constants/statuses';
import getFlagEmoji from 'helpers/getFlagEmoji';

export const sendTransferMessage = async (botClient, chatId, transferInfo, isNew = true) => {
    const {
        name,
        marketValue,
        leftTeam,
        joinedTeam,
        leftTeamCountry,
        joinedTeamCountry,
        fee,
        transferDate,
        age,
        nationality
    } = transferInfo;

    const additionalInfo = isNew ? '' : '\r\n(transfer info has been updated)';

    const flag = getFlagEmoji(nationality);
    const leftTeamFlag = getFlagEmoji(leftTeamCountry);
    const joinedTeamFlag = getFlagEmoji(joinedTeamCountry, false);

    return await botClient
        .sendMessage(
            // '@transfers_transfermarkt',
            chatId,
            `*${transferDate}*\r\n${flag}*${name}* (${marketValue} | ${age} y.o.)\r\n\r\n${leftTeamFlag}*${leftTeam}* → *${joinedTeam}*${joinedTeamFlag}\r\n*${fee}*${additionalInfo}`,
            { parse_mode: 'Markdown' }
        )
        .then(res => SUCCESS)
        .catch(err => (err.response && err.response.statusCode === 403 ? BLOCKED : ERROR));
};
