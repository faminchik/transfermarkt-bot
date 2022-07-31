import ptm from 'constants/transfermarkt/ParsingTableModes';

const prepareParseParams = (
    mode: ptm
): { rowTags: string; cellTags: string; innerRowTag: string | null; innerColTag: string | null } => {
    switch (mode) {
        case ptm.TABLE:
            return { rowTags: 'tr', cellTags: 'td, th', innerRowTag: 'rowspan', innerColTag: 'colspan' };

        case ptm.DIV:
            return { rowTags: 'div', cellTags: 'div', innerRowTag: null, innerColTag: null };
    }
};

interface Options {
    mode: ptm;
    dupCols?: boolean;
    dupRows?: boolean;
    textMode?: boolean;
}

export const parseTable = ($: cheerio.Root, context: cheerio.Cheerio, options: Options): string[][] => {
    const { mode, dupCols = false, dupRows = false, textMode = false } = options ?? {};

    const { rowTags, cellTags, innerRowTag, innerColTag } = prepareParseParams(mode);

    const columns: string[][] = [];
    let currentX = 0;
    let currentY = 0;

    $(rowTags, context).each((rowIndex, row) => {
        currentY = 0;
        $(cellTags, row).each((colIndex, col) => {
            const innerRowLength: number = innerRowTag ? Number($(col).attr(innerRowTag)) || 1 : 1;
            const innerColLength: number = innerColTag ? Number($(col).attr(innerColTag)) || 1 : 1;

            const content = textMode ? $(col).text().trim() : $(col).html() || '';

            for (let x = 0; x < innerRowLength; x++) {
                for (let y = 0; y < innerColLength; y++) {
                    if (columns[currentY + y] === undefined) {
                        columns[currentY + y] = [];
                    }

                    while (columns[currentY + y]?.[currentX + x] !== undefined) {
                        currentY += 1;
                        if (columns[currentY + y] === undefined) {
                            columns[currentY + y] = [];
                        }
                    }

                    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                    columns[currentY + y]![currentX + x] = (x === 0 || dupRows) && (y === 0 || dupCols) ? content : '';
                }
            }
            currentY += 1;
        });
        currentX += 1;
    });

    return columns;
};
