import _ from 'lodash';
import getFlagEmoji from 'helpers/getFlagEmoji';
import { MESSAGE_DELIMITER, MESSAGE_COUNT_PER_MESSAGE } from 'constants/telegram';

export const formTransferMessage = (transferInfo, isNewTransfer = true) => {
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

    const additionalInfo = isNewTransfer ? '' : '\r\n(transfer info has been updated)';

    const flag = getFlagEmoji(nationality);
    const leftTeamFlag = getFlagEmoji(leftTeamCountry);
    const joinedTeamFlag = getFlagEmoji(joinedTeamCountry, false);

    const message = `*${transferDate}*\r\n${flag}*${name}* (${marketValue} | ${age} y.o.)\r\n\r\n${leftTeamFlag}*${leftTeam}* → *${joinedTeam}*${joinedTeamFlag}\r\n*${fee}*${additionalInfo}`;

    return message;
};

export const joinTransferMessages = transfersMessages => {
    let messageItems = [];

    const messageArrays = _.reduce(
        transfersMessages,
        (acc, msg, index) => {
            messageItems.push(msg);

            if ((index + 1) % MESSAGE_COUNT_PER_MESSAGE === 0) {
                acc.push(messageItems);
                messageItems = [];
            }

            if (index + 1 === _.size(transfersMessages)) {
                acc.push(messageItems);
            }

            return acc;
        },
        []
    );

    const messages = _.map(messageArrays, msgArray => _.join(msgArray, MESSAGE_DELIMITER));

    return messages;
};
