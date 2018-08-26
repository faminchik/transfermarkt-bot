require('dotenv').load();
import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import TelegramBot from 'node-telegram-bot-api';
import './server';
import mainProcess from './helpers/mainProcess';
import { sendTransferMessage } from './helpers/telegramBotHelpers';
import getLowLimitDate from './helpers/getLowLimitDate';
import { getUsers, updateUsers } from './helpers/jsonbin/usersCollection';
import { getDisplayedData } from './helpers/jsonbin/displayedDataCollection';

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const intervalDuration = 600000;
// const intervalDuration = 10000;

const addUserToCollection = async msg => {
    const { chat, from, date, text } = msg;
    const { id } = chat;

    let users = await getUsers();

    if (!users[id]) {
        users[id] = { chat, from, date, text };
        await updateUsers({ users });

        console.log('new user', msg);
    }

    return id;
};

bot.onText(/\/start/, async msg => {
    const id = await addUserToCollection(msg);

    const displayedData = await getDisplayedData();
    const lowLimitDate = getLowLimitDate();

    // send messages with recently transfers
    await BPromise.each(displayedData, async transferInfo => {
        const transferDate = moment(transferInfo.transferDate, 'MMM DD, YYYY');

        if (transferDate >= lowLimitDate) {
            await sendTransferMessage(bot, id, transferInfo);
        }
    });
});

bot.onText(/\/simplestart/, async msg => {
    await addUserToCollection(msg);
});

bot.onText(/\/stop/, async msg => {
    // delete user from 'users' collection
    const {
        chat: { id }
    } = msg;

    const users = await getUsers();

    if (users[id]) {
        delete users[id];
        await updateUsers({ users });
    }
});

// start
(async () => {
    let iteration = 0;
    console.log('displayedData size', _.size(await getDisplayedData()));

    await mainProcess();
    console.log('iteration', ++iteration);

    setInterval(async () => {
        await mainProcess();

        console.log('iteration', ++iteration);
    }, intervalDuration);
})();
