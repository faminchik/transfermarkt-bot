import cheerio from 'cheerio';
import cheerioTableParser from 'cheerio-tableparser';

export default (html, searhParam = 'table') => {
    const $ = cheerio.load(html);
    cheerioTableParser($);

    return $(searhParam).parsetable(false, false, true);
};
