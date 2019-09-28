// it isn't fully correct, but I don't know how to extend prototype method by ts declaration.
interface Cheerio {
    parsetable(dupCols?: boolean, dupRows?: boolean, textMode?: boolean): CheerioParsedTable;
}

type CheerioParsedTable = string[][];

declare module 'cheerio-tableparser' {
    const cheerioTableparse: ($: CheerioStatic) => void;

    export = cheerioTableparse;
}
