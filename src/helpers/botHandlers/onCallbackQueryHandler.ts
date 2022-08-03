import cqt from 'constants/CallbackQueryTypes';
import {
    teamTransfersCallbackHandler,
    playerTransfersCallbackHandler
} from 'helpers/botHandlers/callbackQueryHandlers';
import type TelegramBot from 'node-telegram-bot-api';
import type { CallbackQuery } from 'node-telegram-bot-api';

const onCallbackQueryHandler = async (bot: TelegramBot, query: CallbackQuery): Promise<void> => {
    const { data: responseData } = query;
    if (!responseData) return;

    const splittedResponse = responseData.split(' ');
    const type = splittedResponse.shift();

    const responseValue = splittedResponse.join(' ');

    if (type === cqt.CLUB) {
        await teamTransfersCallbackHandler(bot, query, responseValue);
    }

    if (type === cqt.PLAYER) {
        await playerTransfersCallbackHandler(bot, query, responseValue);
    }
};

export default onCallbackQueryHandler;
