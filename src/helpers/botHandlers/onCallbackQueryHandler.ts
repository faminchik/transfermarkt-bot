import _ from 'lodash';
import cqt from 'constants/CallbackQueryTypes';
import { teamTransfersCallbackHandler } from 'helpers/botHandlers/callbackQueryHandlers';
import type TelegramBot from 'node-telegram-bot-api';
import type { CallbackQuery } from 'node-telegram-bot-api';

const onCallbackQueryHandler = async (bot: TelegramBot, query: CallbackQuery): Promise<void> => {
    const { data: responseData } = query;
    if (!responseData) return;

    const splittedResponse = _.split(responseData, ' ');
    const type = splittedResponse.shift();

    if (type === cqt.CLUB) {
        const clubName = _.join(splittedResponse, ' ');
        await teamTransfersCallbackHandler(bot, query, clubName);
    }
};

export default onCallbackQueryHandler;
