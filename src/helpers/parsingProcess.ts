import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/getTableDataFromHTML';
import type { TConvertedDataMapper } from 'ts/ConvertDataTS';
import type pt from 'constants/transfermarkt/ParsingTypes';

export default <T extends pt>(html: string, type: T): TConvertedDataMapper[T] => {
    const { textData, htmlData } = getTableDataFromHTML(html, type);

    return convertData({ textData, htmlData }, type);
};
