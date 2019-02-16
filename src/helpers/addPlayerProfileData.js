import _ from 'lodash';
import BPromise from 'bluebird';
import cheerio from 'cheerio';
import config from 'config';
import { memoizedFormPlayerProfileData } from 'utils/formMemoizedFunctions';
import { fetchHtmlRequest } from 'utils/fetchRequests';

const BASE_URL = config.get('transfermarkt-base-url');

export default async transfersInfo =>
    await BPromise.map(transfersInfo, async transferInfo => {
        const { profileLink } = transferInfo;
        const profileData = await memoizedFormPlayerProfileData(profileLink);

        return { ...transferInfo, ...profileData };
    });

export const formPlayerProfileData = async profileLink => {
    const url = BASE_URL + profileLink;

    const html = await fetchHtmlRequest(url);
    if (!html) return { highestMarketValue: '' };

    const $ = cheerio.load(html);

    // highestMarketValue
    $('.zeile-unten > .right-td > br, span').remove();
    const highestMarketValue = _.trim($('.zeile-unten > .right-td').text());

    return { highestMarketValue };
};
