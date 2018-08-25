require('dotenv').load();
import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import TelegramBot from 'node-telegram-bot-api';
import './server';
import transfersProcess from './helpers/transfersProcess';
import { sendTransferMessage } from './helpers/telegramBotHelpers';
import getLowLimitDate from './helpers/getLowLimitDate';
import { getUsers, updateUsers, updateAndGetUsers } from './helpers/jsonbin/usersCollection';
import { getDisplayedData, updateDisplayedData } from './helpers/jsonbin/displayedDataCollection';

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const intervalDuration = 600000;
// const intervalDuration = 10000;

const handleStart = async msg => {
    const { chat, from, date, text } = msg;
    const { id } = chat;

    let users = await getUsers();

    if (!users[id]) {
        users[id] = { chat, from, date, text };
        users = await updateAndGetUsers({ users });
    }

    return id;
};

bot.onText(/\/start/, async msg => {
    const id = await handleStart(msg);

    const displayedData = await getDisplayedData();
    const lowLimitDate = getLowLimitDate();

    console.log('new user', msg);

    await BPromise.each(_.reverse(_.cloneDeep(displayedData)), async transferInfo => {
        const transferDate = moment(_.get(transferInfo, 'transferDate'), 'MMM DD, YYYY');
        if (transferDate >= lowLimitDate) {
            await sendTransferMessage(bot, id, transferInfo);
        }
    });
});

bot.onText(/\/simplestart/, async msg => {
    await handleStart(msg);
});

bot.onText(/\/stop/, async msg => {
    const {
        chat: { id }
    } = msg;

    const users = await getUsers();

    if (users[id]) {
        delete users[id];
        await updateUsers({ users });
    }
});

const start = async () => {
    let iteration = 0;
    console.log('displayedData size', _.size(await getDisplayedData()));

    await mainProcess();
    console.log('iteration', ++iteration);

    setInterval(async () => {
        await mainProcess();

        console.log('iteration', ++iteration);
    }, intervalDuration);
};

start();

const mainProcess = async () => {
    const result = await transfersProcess();
    if (!result) return;

    const users = await getUsers();
    const displayedData = await getDisplayedData();

    const transfersToShow = _.filter(result, item => !_.find(displayedData, item));
    const ids = _.keys(users);

    _.forEach(transfersToShow, transferInfo => {
        _.forEach(ids, id => {
            sendTransferMessage(bot, id, transferInfo);
        });
    });

    if (!_.isEmpty(transfersToShow)) {
        displayedData.push(...transfersToShow);
        await updateDisplayedData({ displayedData });
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
    console.log('users', _.cloneDeep(users));
};
