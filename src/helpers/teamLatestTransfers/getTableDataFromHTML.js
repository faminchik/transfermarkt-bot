import _ from 'lodash';
import cheerio from 'cheerio';
import parseTable from 'helpers/parseTable';
import { TABLE_HEADER_CLASS_NAME } from 'constants/transfermarkt';
import TableHeadersConfig from 'configs/TableHeadersConfig';

export default (html, type) => {
    const $ = cheerio.load(html);
    const header = TableHeadersConfig[type];

    const searchResultNodes = $(TABLE_HEADER_CLASS_NAME);
    const resultNode = _.find(searchResultNodes, node => {
        const text = $(node).text();
        return _.includes(text, header);
    });

    if (_.isEmpty(resultNode)) return {};

    const root = $(resultNode)
        .next()
        .next();
    return parseTable($, root);
};
