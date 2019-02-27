import cheerio from 'cheerio';
import parseTable from 'helpers/parseTable';
import { CLASS_NAME } from 'constants/transfermarkt';

export default html => {
    const $ = cheerio.load(html);
    return parseTable($, CLASS_NAME);
};
