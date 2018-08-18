export const sendTransferMessage = async (botClient, chatId, transferInfo) => {
    const { name, marketValue, leftTeam, joinedTeam, fee, transferDate } = transferInfo;

    await botClient.sendMessage(
        // '@transfers_transfermarkt',
        chatId,
        `*${transferDate}*\r\n*${name}* (${marketValue})\r\n\r\n*${leftTeam}* → *${joinedTeam}*\r\n*${fee}*`,
        { parse_mode: 'Markdown' }
    );
};
