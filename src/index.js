require('dotenv').load();
import _ from 'lodash';
import TelegramBot from 'node-telegram-bot-api';
import transfersProcess from './helpers/transfersProcess';
import { sendTransferMessage } from './helpers/telegramBotHelpers';

const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// const intervalDuraion = 600000;
const intervalDuraion = 10000;

const users = {};
const displayedData = [];

bot.onText(/\/start/, msg => {
    const {
        chat: { id }
    } = msg;

    if (!users[id]) {
        users[id] = msg;
    }

    _.forEach(displayedData, transferInfo => {
        sendTransferMessage(bot, id, transferInfo);
    });
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

    const transfersToShow = _.filter(result, item => {
        const foundElement = _.find(displayedData, item);
        if (!foundElement) {
            displayedData.push(item);
            return true;
        }
        return false;
    });

    const ids = _.keys(users);

    _.forEach(transfersToShow, transferInfo => {
        _.forEach(ids, id => {
            sendTransferMessage(bot, id, transferInfo);
        });
    });

    console.log('viewedData', _.cloneDeep(displayedData));
    console.log('transfersToShow', _.cloneDeep(transfersToShow));
    console.log('users', _.cloneDeep(users));
};

const start = async () => {
    let iterations = 0;
    await mainProcess();
    console.log('iterations', ++iterations);

    setInterval(async () => {
        await mainProcess();

        console.log('iterations', ++iterations);
    }, intervalDuraion);
};

start();
