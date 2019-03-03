import _ from 'lodash';
import cheerio from 'cheerio';
import parseTable from 'helpers/parseTable';
import { TABLE_HEADER_CLASS_NAME, TABLE_CLASS_NAME } from 'constants/transfermarkt';
import TableHeadersConfig from 'configs/TableHeadersConfig';

export default (html, type) => {
    const $ = cheerio.load(html);
    const header = TableHeadersConfig[type];

    const nodes = $(TABLE_HEADER_CLASS_NAME);
    const headerNode = _.find(nodes, node => {
        const text = $(node).text();
        return _.includes(text, header);
    });

    if (_.isEmpty(headerNode)) return {};

    let nodeClassName = null;
    let neededNodeRoot = $(headerNode);

    do {
        neededNodeRoot = neededNodeRoot.next();
        nodeClassName = neededNodeRoot.attr('class');
    } while (nodeClassName !== TABLE_CLASS_NAME);

    return parseTable($, neededNodeRoot);
};
