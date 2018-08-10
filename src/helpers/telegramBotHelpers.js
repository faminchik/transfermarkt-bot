export const sendTransferMessage = (botClient, chatId, transferInfo) => {
    const { name, marketValue, leftTeam, joinedTeam, fee } = transferInfo;

    botClient.sendMessage(
        // '@transfers_transfermarkt',
        chatId,
        `*${name}* (${marketValue})\r\n\r\n*${leftTeam}* → *${joinedTeam}*\r\n*${fee}*`,
        { parse_mode: 'Markdown' }
    );
};
