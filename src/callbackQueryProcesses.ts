import _ from 'lodash';
import { getClubInfo } from 'db/helpers/clubCollectionHelpers';
import teamTransfersProcess from 'helpers/teamTransfers';
import { sendTeamTransfersMessages, deleteMessages } from 'helpers/telegram/telegramBotHelpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { CallbackQuery } from 'node-telegram-bot-api';

export const teamTransfersCallbackQuery = async (bot: TelegramBot, response: CallbackQuery, clubName: string) => {
    const clubInfo = await getClubInfo(clubName);
    if (!clubInfo) return;

    bot.answerCallbackQuery(response.id, { text: clubName });

    const { teamTransfersArrivals, teamTransfersDepartures } = await teamTransfersProcess(clubInfo.clubLink);

    const chatId = response.from.id;

    const msgData = await sendTeamTransfersMessages(bot, chatId, {
        teamTransfersArrivals,
        teamTransfersDepartures,
        clubInfo
    });

    setTimeout(async () => {
        const msgIds = _.compact(_.flatMap(msgData, item => item.message_id));
        await deleteMessages(bot, chatId, msgIds);
    }, 60000);
};
