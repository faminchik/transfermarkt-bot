import TelegramBot from 'node-telegram-bot-api';
import env from 'constants/EnvironmentVariables';
import { connectDataBase } from './db';
import { runServer } from './server';
import 'utils/formMemoizedFunctions';
import mainProcess from './mainProcess';
import botHandlers from './botHandlers';

const intervalDuration = 10 * 1000 * 60; // 10 min in ms
// const intervalDuration = 10 * 1000; // 10 s in ms

(async () => {
    await runServer();
    await connectDataBase(env.MONGO_URI);

    const bot = new TelegramBot(env.TELEGRAM_BOT_TOKEN, { polling: true });
    botHandlers(bot);

    // --------------

    let iteration = 0;

    await mainProcess(bot);
    console.log('iteration', ++iteration);

    setInterval(async () => {
        await mainProcess(bot);

        console.log('iteration', ++iteration);
    }, intervalDuration);
})();
