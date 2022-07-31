import { parseTable } from 'utils/cheerioTableParser';
import type ptm from 'constants/transfermarkt/ParsingTableModes';

export default ($: cheerio.Root, searchNode: cheerio.Cheerio | string, mode: ptm) => {
    const textData = parseTable($, $(searchNode), { mode, textMode: true });
    const htmlData = parseTable($, $(searchNode), { mode, textMode: false });

    return { textData, htmlData };
};
