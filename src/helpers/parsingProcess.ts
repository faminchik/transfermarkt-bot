import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/getTableDataFromHTML';
import type { TConvertedDataMapper } from 'ts/ConvertDataTS';
import type pt from 'constants/transfermarkt/ParsingTypes';
import type ptm from 'constants/transfermarkt/ParsingTableModes';

export default <T extends pt>(html: string, type: T, mode: ptm): TConvertedDataMapper[T] => {
    const { textData, htmlData } = getTableDataFromHTML(html, type, mode);

    return convertData({ textData, htmlData }, type);
};
