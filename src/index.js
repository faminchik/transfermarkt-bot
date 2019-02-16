require('dotenv').load();
import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import TelegramBot from 'node-telegram-bot-api';
import './db';
import './server';
import 'utils/formMemoizedFunctions';
import mainProcess from './mainProcess';
import { addUser, deleteUser } from 'db/helpers';
import { getAllTransfers } from 'db/utils';
import { sendTransferMessage } from 'helpers/telegramBotHelpers';
import getLowLimitDate from 'helpers/getLowLimitDate';

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const intervalDuration = 10 * 1000 * 60; // 10 min in ms
// const intervalDuration = 10 * 1000; // 10 s in ms

bot.onText(/\/start/, async msg => {
    const id = await addUser(msg);
    if (!id) return;

    const displayedTransfers = await getAllTransfers();
    const lowLimitDate = getLowLimitDate();

    // send messages with recently transfers
    await BPromise.each(displayedTransfers, async transferInfo => {
        const transferDate = moment(transferInfo.transferDate, 'MMM DD, YYYY');

        if (transferDate >= lowLimitDate) {
            await sendTransferMessage(bot, id, transferInfo);
        }
    });
});

bot.onText(/\/simplestart/, msg => {
    addUser(msg);
});

bot.onText(/\/stop/, msg => {
    deleteUser(msg);
});

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
