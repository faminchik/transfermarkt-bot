import _ from 'lodash';
import BPromise from 'bluebird';
import config from 'config';
import { fetchHtmlRequest } from '../utils/fetchRequests';
import { CLASS_NAME } from '../constants/transfermarkt';
import convertData from '../helpers/convertData';
import getTableDataFromHTML from '../helpers/getTableDataFromHTML';
import getInterestingTransfers from '../helpers/getInterestingTransfers';

const URL = config.get('transfermarkt-url');

export default async () => {
    const transfers = await BPromise.map(_.range(1, 11), async number => {
        const url = _.replace(URL, '*', number);
        const html = await fetchHtmlRequest(url);
        if (!html) return [];

        const { textData, htmlData } = getTableDataFromHTML(html, CLASS_NAME);
        const transfersInfo = convertData({ textData, htmlData });

        return getInterestingTransfers(transfersInfo);
    });

    return _.flatten(transfers);
};
