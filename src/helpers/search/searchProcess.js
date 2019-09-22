import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import parsingProcess from 'helpers/parsingProcess';

const URL = config.get('search-url');

export default async (query = '', types) => {
    const url = URL + query;
    const html = await fetchHtmlRequest(url);
    if (!html) return {};

    return parsingProcess(html, types);
};
