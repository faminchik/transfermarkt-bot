import _ from 'lodash';
import cheerio from 'cheerio';
import parseTable from 'helpers/parseTable';
import { TABLE_CLASS_NAME } from 'constants/Transfermarkt';
import TableHeadersConfig from 'configs/TableHeadersConfig';
import TableHeaderClassConfig from 'configs/TableHeaderClassConfig';
import ptm from 'constants/transfermarkt/ParsingTableModes';
import type pt from 'constants/transfermarkt/ParsingTypes';
import type { IParsedTable } from 'ts/ParseTableTS';

const prepareSearchNode = ($: cheerio.Root, headerNode: cheerio.Element, mode: ptm) => {
    switch (mode) {
        case ptm.TABLE:
            let nodeClassName: string;
            let searchNodeRoot = $(headerNode);

            do {
                searchNodeRoot = searchNodeRoot.next();
                nodeClassName = searchNodeRoot.attr('class') ?? '';
            } while (!nodeClassName.includes(TABLE_CLASS_NAME));

            return searchNodeRoot;

        case ptm.DIV:
            return $(headerNode).parent();
    }
};

export default (html: string, type: pt, mode: ptm): IParsedTable => {
    const $ = cheerio.load(html);
    const header = TableHeadersConfig[type];
    const headerClassName = TableHeaderClassConfig[type];

    const nodes = $(headerClassName);
    const headerNode = _.find(nodes, (node) => {
        const text = $(node).text();
        return _.includes(text, header);
    });

    if (!headerNode || _.isEmpty(headerNode)) return { htmlData: [], textData: [] };

    const searchNode = prepareSearchNode($, headerNode, mode);

    return parseTable($, searchNode, mode);
};
