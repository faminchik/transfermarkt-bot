import TelegramBot from 'node-telegram-bot-api';
import './db';
import './server';
import 'utils/formMemoizedFunctions';
import mainProcess from './mainProcess';
import botHandlers from './botHandlers';

require('dotenv').config();

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
botHandlers(bot);

const intervalDuration = 10 * 1000 * 60; // 10 min in ms
// const intervalDuration = 10 * 1000; // 10 s in ms

// start
(async () => {
    let iteration = 0;

    await mainProcess(bot);
    console.log('iteration', ++iteration);

    setInterval(async () => {
        await mainProcess(bot);

        console.log('iteration', ++iteration);
    }, intervalDuration);
})();
