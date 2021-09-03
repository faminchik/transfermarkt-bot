import _ from 'lodash';
import TelegramBot from 'node-telegram-bot-api';
import { addUser, deleteUser } from 'db/helpers';
import { insertClubs } from 'db/utils/clubCollectionUtils';
import { getClubInfo } from 'db/helpers/clubCollectionHelpers';
import { getRecentTransfers } from 'db/utils';
import {
    sendJoinedTransferMessages,
    sendClubsSearchResultWithOptions,
    sendTeamTransfersMessages,
    sendMessageOnStart,
    sendMessageOnStop
} from 'helpers/telegram/telegramBotHelpers';
import cqt from 'constants/CallbackQueryTypes';
import searchProcess from 'helpers/search';
import teamTransfersProcess from 'helpers/teamTransfers';

export default (bot: TelegramBot) => {
    bot.onText(/\/start/, async msg => {
        const id = await addUser(msg);
        if (!id) return;

        await sendMessageOnStart(bot, id);
        const recentTransfers = await getRecentTransfers();

        // send messages with recently transfers
        await sendJoinedTransferMessages(bot, id, recentTransfers);
    });

    bot.onText(/\/simplestart/, async msg => {
        const id = await addUser(msg);
        if (!id) return;

        await sendMessageOnStart(bot, id);
    });

    bot.onText(/\/stop/, async msg => {
        const id = await deleteUser(msg);
        if (!id) return;

        await sendMessageOnStop(bot, id);
    });

    bot.onText(/\/team (.+)/, async (msg, match) => {
        if (!match) return;

        const chatId = _.get(msg, ['chat', 'id']);
        const query = match[1];
        if (!query) return;

        const { clubs } = await searchProcess(query);

        await insertClubs(clubs);
        await sendClubsSearchResultWithOptions(bot, chatId, clubs);
    });

    bot.on('callback_query', async response => {
        const { data: responseData } = response;
        if (!responseData) return;

        const splittedResponse = _.split(responseData, ' ');
        const type = splittedResponse.shift();

        if (type === cqt.CLUB) {
            const clubName = _.join(splittedResponse, ' ');
            bot.answerCallbackQuery(response.id, { text: clubName });

            const clubInfo = await getClubInfo(clubName);
            if (!clubInfo) return;

            const teamTransfers = await teamTransfersProcess(clubInfo.clubLink);
            const { teamTransfersArrivals, teamTransfersDepartures } = teamTransfers;

            await sendTeamTransfersMessages(bot, response.from.id, {
                teamTransfersArrivals,
                teamTransfersDepartures,
                clubInfo
            });
        }
    });
};
