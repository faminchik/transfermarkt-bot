import env from 'dotenv';
import _ from 'lodash';
import TelegramBot from 'node-telegram-bot-api';
import config from 'config';
import { fetchHtmlRequest } from './utils/fetchRequests';
import { CLASS_NAME } from './constants/transfermarkt';
import convertData from './helpers/convertData';
import getTableDataFromHTML from './helpers/getTableDataFromHTML';
import getInterestingTransfers from './helpers/getInterestingTransfers';

env.load();
const { TELEGRAM_BOT_TOKEN } = process.env;

if (!TELEGRAM_BOT_TOKEN) {
    console.error('Seems like you forgot to pass Telegram Bot Token. I can not proceed...');
    process.exit(1);
}

const URL = config.get('transfermarkt-url');
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

// const setIntervalDuraion = 600000;
const setIntervalDuraion = 10000;

bot.onText(/\/start/, async msg => {
    const {
        chat: { id }
    } = msg;

    start(id);
});

const start = async id => {
    const displayedData = [];

    let iterations = 0;
    await mainProcess(id, displayedData);
    console.log('iterations', ++iterations);

    setInterval(async () => {
        await mainProcess(id, displayedData);

        console.log('iterations', ++iterations);
    }, setIntervalDuraion);
};

const mainProcess = async (id, displayedData) => {
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

    _.forEach(transfersToShow, transferInfo => {
        const { name, marketValue, leftTeam, joinedTeam, fee } = transferInfo;
        bot.sendMessage(
            // '@transfers_transfermarkt',
            id,
            `*${name}* (${marketValue})\r\n\r\n*${leftTeam}* → *${joinedTeam}*\r\n*${fee}*`,
            { parse_mode: 'Markdown' }
        );
    });

    console.log('viewedData', displayedData);
    console.log('transfersToShow', transfersToShow);
};

const transfersProcess = async () => {
    const html = await fetchHtmlRequest(URL);
    if (!html) return null;

    const data = getTableDataFromHTML(html, CLASS_NAME);
    const transfersInfo = convertData(data);

    return getInterestingTransfers(transfersInfo);
};
