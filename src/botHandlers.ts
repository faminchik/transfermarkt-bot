import _ from 'lodash';
import { addUser, deleteUser } from 'db/helpers';
import { insertClubs } from 'db/utils/clubCollectionUtils';
import { getRecentTransfers } from 'db/utils';
import {
    sendJoinedTransferMessages,
    sendClubsSearchResultWithOptions,
    sendMessageOnStart,
    sendMessageOnStop,
    deleteMessages
} from 'helpers/telegram/telegramBotHelpers';
import cqt from 'constants/CallbackQueryTypes';
import searchProcess from 'helpers/search';
import { teamTransfersCallbackQuery } from './callbackQueryProcesses';
import type TelegramBot from 'node-telegram-bot-api';

export default (bot: TelegramBot) => {
    bot.onText(/\/start/, async msg => {
        const id = await addUser(msg);
        if (!id) return;

        await sendMessageOnStart(bot, id);
    });

    bot.onText(/\/recent/, async msg => {
        const chatId = msg.chat.id;

        const recentTransfers = await getRecentTransfers();
        await sendJoinedTransferMessages(bot, chatId, recentTransfers);
    });

    bot.onText(/\/stop/, async msg => {
        const id = await deleteUser(msg);
        if (!id) return;

        await sendMessageOnStop(bot, id);
    });

    bot.onText(/\/team (.+)/, async (msg, match) => {
        if (!match) return;

        const chatId = msg.chat.id;
        const query = match[1];
        if (!query) return;

        const { clubs } = await searchProcess(query);

        await insertClubs(clubs);
        await sendClubsSearchResultWithOptions(bot, chatId, clubs);

        await deleteMessages(bot, chatId, msg.message_id);
    });

    bot.on('callback_query', async response => {
        const { data: responseData } = response;
        if (!responseData) return;

        const splittedResponse = _.split(responseData, ' ');
        const type = splittedResponse.shift();

        if (type === cqt.CLUB) {
            const clubName = _.join(splittedResponse, ' ');
            await teamTransfersCallbackQuery(bot, response, clubName);
        }

        const chatId = response.from.id;

        const callbackMessageId = response.message?.message_id;
        if (callbackMessageId) {
            await deleteMessages(bot, chatId, callbackMessageId);
        }
    });
};
