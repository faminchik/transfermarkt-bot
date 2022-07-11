import pt from 'constants/transfermarkt/ParsingTypes';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';
import { SEARCH_URL } from 'constants/Config';
import type { TPlayerEntity } from 'ts/EntitiesTS';

export default async (query: string): Promise<TPlayerEntity[]> => {
    const url = SEARCH_URL + query;

    const html = await fetchHtmlRequest(url);
    if (!html) return [];

    return parsingProcess(html, pt.SEARCH_PLAYERS);
};
