import _ from 'lodash';
import config from 'config';
import { fetchHtmlRequest } from 'utils/fetchRequests';
import getTableDataFromHTML from 'helpers/search/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataSearchStrategy from 'configs/ConvertDataSearchStrategy';

const URL = config.get('search-url');

export default async (query = '', types = []) => {
    const url = URL + query;
    const html = await fetchHtmlRequest(url);
    if (!html) return {};

    return _.reduce(
        types,
        (result, type) => {
            const { textData, htmlData } = getTableDataFromHTML(html, type);
            if (!textData && !htmlData) {
                result[type] = [];
                return result;
            }

            const strategy = ConvertDataSearchStrategy[type];
            const config = ConvertDataConfig[strategy];
            const convertedData = convertData({ textData, htmlData }, config);

            result[type] = convertedData;
            return result;
        },
        {}
    );
};
