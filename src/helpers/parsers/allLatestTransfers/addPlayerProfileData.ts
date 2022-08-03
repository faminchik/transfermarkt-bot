import BPromise from 'bluebird';
import cheerio from 'cheerio';
import { memoizedFormPlayerProfileData } from 'utils/formMemoizedFunctions';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import { BASE_URL } from 'constants/Config';
import type { TTransferEntity, TTransferFullEntity } from 'ts/EntitiesTS';

let u = 0;
let r = 0;

export default async (transfersInfo: TTransferEntity[]): Promise<TTransferFullEntity[]> =>
    await BPromise.map(transfersInfo, async (transferInfo) => {
        const { profileLink } = transferInfo;
        const profileData = await memoizedFormPlayerProfileData(profileLink);

        return { ...transferInfo, ...profileData };
    });

export const formPlayerProfileData = async (
    profileLink: TTransferEntity['profileLink']
): Promise<Pick<TTransferFullEntity, 'highestMarketValue'>> => {
    const url = BASE_URL + profileLink;
    console.log('url', u++);

    const html = await fetchHtmlRequest(url);
    console.log('res', r++);
    if (!html) return { highestMarketValue: '' };

    const $ = cheerio.load(html);

    // highestMarketValue
    const highestMarketValue = $('.tm-player-market-value-development__max-value').text().trim();
    console.log('highestMarketValue', profileLink, highestMarketValue);

    return { highestMarketValue };
};
