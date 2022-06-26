import schedule from 'node-schedule';
import TelegramBot from 'node-telegram-bot-api';
import env from 'constants/EnvironmentVariables';
import { connectDataBase } from './db';
import { runServer } from './server';
import 'utils/formMemoizedFunctions';
import mainProcess from './mainProcess';
import botHandlers from './botHandlers';

(async () => {
    await runServer();
    await connectDataBase(env.MONGO_URI);

    const bot = new TelegramBot(env.TELEGRAM_BOT_TOKEN, { polling: true });
    botHandlers(bot);

    // --------------

    let iteration = 0;

    schedule.scheduleJob('*/10 * * * *', async () => {
        await mainProcess(bot);
        console.log('iteration', ++iteration);
    });
})();
