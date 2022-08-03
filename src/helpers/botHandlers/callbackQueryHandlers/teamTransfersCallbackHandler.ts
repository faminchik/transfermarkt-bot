import { fetchClubInfo } from 'db/helpers/clubs';
import { sendTeamTransfersMessages } from 'helpers/telegram/sendMessage';
import { teamTransfersParser } from 'helpers/parsers';
import type TelegramBot from 'node-telegram-bot-api';
import type { CallbackQuery } from 'node-telegram-bot-api';

const teamTransfersCallbackHandler = async (
    bot: TelegramBot,
    query: CallbackQuery,
    clubName: string
): Promise<void> => {
    const clubInfo = await fetchClubInfo(clubName);
    if (!clubInfo) return;

    bot.answerCallbackQuery(query.id, { text: clubName });

    const { teamTransfersArrivals, teamTransfersDepartures } = await teamTransfersParser(clubInfo.clubLink);

    const chatId = query.from.id;

    await sendTeamTransfersMessages(bot, chatId, {
        teamTransfersArrivals,
        teamTransfersDepartures,
        clubInfo
    });
};

export default teamTransfersCallbackHandler;
