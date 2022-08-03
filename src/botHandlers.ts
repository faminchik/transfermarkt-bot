import {
    onStartHandler,
    onStopHandler,
    onRecentHandler,
    onTeamHandler,
    onPlayerHandler,
    onCallbackQueryHandler
} from 'helpers/botHandlers';
import type TelegramBot from 'node-telegram-bot-api';

export default (bot: TelegramBot) => {
    bot.onText(/\/start/, async (msg) => {
        await onStartHandler(bot, msg);
    });

    bot.onText(/\/stop/, async (msg) => {
        await onStopHandler(bot, msg);
    });

    bot.onText(/\/recent/, async (msg) => {
        await onRecentHandler(bot, msg);
    });

    bot.onText(/\/team (.+)/, async (msg, match) => {
        await onTeamHandler(bot, msg, match);
    });

    bot.onText(/\/player (.+)/, async (msg, match) => {
        await onPlayerHandler(bot, msg, match);
    });

    bot.on('callback_query', async (query) => {
        await onCallbackQueryHandler(bot, query);
    });
};
