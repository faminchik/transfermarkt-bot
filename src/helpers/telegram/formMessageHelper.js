import _ from 'lodash';
import getFlagEmoji from 'helpers/getFlagEmoji';
import { MESSAGE_DELIMITER, ITEMS_COUNT_PER_MESSAGE } from 'constants/telegram';

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

    return `*${transferDate}*\r\n${flag}*${name}* (${marketValue} | ${age} y.o.)\r\n\r\n${leftTeamFlag}*${leftTeam}* → *${joinedTeam}*${joinedTeamFlag}\r\n*${fee}*${additionalInfo}`;
};

export const formTeamTransferMessage = (teamTransferInfo, arrow = '', index) => {
    const {
        name,
        age,
        marketValue,
        secondPartyTeam,
        secondPartyTeamCountry,
        fee,
        nationality
    } = teamTransferInfo;

    const flag = getFlagEmoji(nationality);
    const secondPartyFlag = getFlagEmoji(secondPartyTeamCountry);
    const indexStr = _.isNumber(index) ? `*${index}*. ` : '';

    return `${indexStr}${flag}*${name}* (${marketValue} | ${age} y.o.)\r\n\r\n${arrow}${secondPartyFlag}*${secondPartyTeam}* | *${fee}*`;
};

export const joinMessages = (messages, header = '') => {
    const messageArrays = _.chunk(messages, ITEMS_COUNT_PER_MESSAGE);
    return _.map(messageArrays, (msgArray, index) => {
        const msg = _.join(msgArray, MESSAGE_DELIMITER);
        return index === 0 ? header + msg : msg;
    });
};

export const formClubsSearchResultMessage = searchResult => {
    const messageArray = _.map(searchResult, ({ clubName, country, totalMarketValue }, index) => {
        const flag = getFlagEmoji(country);
        const totalMarketValueStr = totalMarketValue === '-' ? '' : `(${totalMarketValue})`;
        return `*${index + 1}. ${flag}${clubName}* ${totalMarketValueStr}`;
    });

    return _.join(messageArray, '\r\n');
};

export const formTeamTransferHeader = (clubInfo, type) => {
    const { clubName, country } = clubInfo;
    const flag = getFlagEmoji(country);

    return `${flag}*${clubName}* | *${type}*:\r\n\r\n`;
};
