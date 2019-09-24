import config from 'config';
import pt from 'constants/transfermarkt/ParsingTypes';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';

const URL: string = config.get('search-url');

export default async (query = '', types: pt[]) => {
    const url = URL + query;

    const html = await fetchHtmlRequest(url);
    if (!html) return {};

    return parsingProcess(html, types);
};
