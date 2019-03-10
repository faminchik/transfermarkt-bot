import _ from 'lodash';
import { addUser, deleteUser } from 'db/helpers';
import { insertClubs } from 'db/utils/clubCollectionUtils';
import { getClubInfo } from 'db/helpers/clubCollectionHelpers';
import { getRecentTransfers } from 'db/utils';
import {
    sendJoinedTransferMessages,
    sendClubsSearchResultWithOptions,
    sendTeamTransfersMessages
} from 'helpers/telegram/telegramBotHelpers';
import { CLUB } from 'constants/CallbackQueryTypes';
import searchProcess from 'helpers/search';
import teamTransfersProcess from 'helpers/teamTransfers';

export default bot => {
    bot.onText(/\/start/, async msg => {
        const id = await addUser(msg);
        if (!id) return;

        const recentTransfers = await getRecentTransfers();

        // send messages with recently transfers
        await sendJoinedTransferMessages(bot, id, recentTransfers);
    });

    bot.onText(/\/simplestart/, msg => {
        addUser(msg);
    });

    bot.onText(/\/stop/, msg => {
        deleteUser(msg);
    });

    bot.onText(/\/test (.+)/, async (msg, match) => {
        return;
        const chatId = _.get(msg, 'chat.id');
        const query = match[1];

        const { clubs } = await searchProcess(query);

        await insertClubs(clubs);
        await sendClubsSearchResultWithOptions(bot, chatId, clubs);
    });

    bot.on('callback_query', async response => {
        return;
        const splittedResponse = _.split(response.data, ' ');
        const type = splittedResponse.shift();

        if (type === CLUB) {
            const clubName = _.join(splittedResponse, ' ');
            bot.answerCallbackQuery(response.id, { text: clubName });

            const clubInfo = await getClubInfo(clubName);
            const teamTransfers = await teamTransfersProcess(clubInfo.clubLink);

            await sendTeamTransfersMessages(bot, response.from.id, { teamTransfers, clubInfo });
        }
    });
};
