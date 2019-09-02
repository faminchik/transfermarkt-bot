import _ from 'lodash';
import BPromise from 'bluebird';
import cheerio from 'cheerio';
import config from 'config';
import { memoizedFormPlayerProfileData } from 'utils/formMemoizedFunctions';
import { fetchHtmlRequest } from 'utils/fetchRequests';

const BASE_URL = config.get('base-url');

let u = 0;
let r = 0;

export default async transfersInfo =>
    await BPromise.map(transfersInfo, async transferInfo => {
        const { profileLink } = transferInfo;
        const profileData = await memoizedFormPlayerProfileData(profileLink);

        return { ...transferInfo, ...profileData };
    });

export const formPlayerProfileData = async profileLink => {
    const url = BASE_URL + profileLink;
    console.log('url', u++);

    const html = await fetchHtmlRequest(url);
    console.log('res', r++);
    if (!html) return { highestMarketValue: '' };

    const $ = cheerio.load(html);

    // highestMarketValue
    $('.zeile-unten > .right-td > br, span').remove();
    const highestMarketValue = _.trim($('.zeile-unten > .right-td').text());

    return { highestMarketValue };
};
