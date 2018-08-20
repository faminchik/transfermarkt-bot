require('dotenv').load();
import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import TelegramBot from 'node-telegram-bot-api';
import './server';
import transfersProcess from './helpers/transfersProcess';
import { sendTransferMessage } from './helpers/telegramBotHelpers';
import getLowLimitDate from './helpers/getLowLimitDate';

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const intervalDuration = 600000;
// const intervalDuration = 10000;

const users = {};
const displayedData = [];

bot.onText(/\/start/, async msg => {
    const {
        chat: { id }
    } = msg;

    if (!users[id]) users[id] = msg;

    const lowLimitDate = getLowLimitDate();
    console.log('new user', msg);

    await BPromise.each(_.reverse(_.cloneDeep(displayedData)), async transferInfo => {
        const transferDate = moment(_.get(transferInfo, 'transferDate'), 'MMM DD, YYYY');
        if (transferDate >= lowLimitDate) {
            await sendTransferMessage(bot, id, transferInfo);
        }
    });
});

bot.onText(/\/simplestart/, msg => {
    const {
        chat: { id }
    } = msg;

    if (!users[id]) users[id] = msg;
});

bot.onText(/\/stop/, msg => {
    let {
        chat: { id }
    } = msg;

    if (users[id]) delete users[id];
});

const mainProcess = async () => {
    const result = await transfersProcess();
    if (!result) return;

    const transfersToShow = _.filter(result, item => !_.find(displayedData, item));
    const ids = _.keys(users);

    _.forEach(transfersToShow, transferInfo => {
        _.forEach(ids, id => {
            sendTransferMessage(bot, id, transferInfo);
        });
    });

    displayedData.push(...transfersToShow);

    // console.log('displayedData', _.reverse(_.cloneDeep(displayedData)));
    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
    console.log('users', _.cloneDeep(users));
};

const start = async () => {
    let iteration = 0;

    await mainProcess();
    console.log('iteration', ++iteration);

    setInterval(async () => {
        await mainProcess();

        console.log('iteration', ++iteration);
    }, intervalDuration);
};

start();
