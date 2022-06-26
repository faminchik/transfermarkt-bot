interface Options {
    dupCols?: boolean;
    dupRows?: boolean;
    textMode?: boolean;
}

export const parseTable = ($: cheerio.Root, context: cheerio.Cheerio, options: Options = {}): string[][] => {
    const { dupCols = false, dupRows = false, textMode = false } = options ?? {};

    const columns: string[][] = [];
    let currentX = 0;
    let currentY = 0;

    $('tr', context).each((rowIndex, row) => {
        currentY = 0;
        $('td, th', row).each((colIndex, col) => {
            const rowSpan = $(col).attr('rowspan') || 1;
            const colSpan = $(col).attr('colspan') || 1;

            const content = textMode ? $(col).text().trim() : $(col).html() || '';

            for (let x = 0; x < rowSpan; x++) {
                for (let y = 0; y < colSpan; y++) {
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
