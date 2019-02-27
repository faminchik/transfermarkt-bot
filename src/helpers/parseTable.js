import cheerioTableParser from 'cheerio-tableparser';

export default ($, searhParam = 'table') => {
    cheerioTableParser($);

    const textData = $(searhParam).parsetable(false, false, true);
    const htmlData = $(searhParam).parsetable(false, false, false);

    return { textData, htmlData };
};
