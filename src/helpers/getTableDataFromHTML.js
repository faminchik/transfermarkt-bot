import cheerio from 'cheerio';
import cheerioTableParser from 'cheerio-tableparser';

export default (html, searhParam = 'table') => {
    const $ = cheerio.load(html);
    cheerioTableParser($);

    const textData = $(searhParam).parsetable(false, false, true);
    const htmlData = $(searhParam).parsetable(false, false, false);

    return { textData, htmlData };
};
