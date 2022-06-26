import { parseTable } from 'utils/cheerioTableParser';

export default ($: cheerio.Root, searhParam: cheerio.Cheerio | string = 'table') => {
    const textData = parseTable($, $(searhParam), { textMode: true });
    const htmlData = parseTable($, $(searhParam), { textMode: false });

    return { textData, htmlData };
};
