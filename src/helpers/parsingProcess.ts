import { TConvertedDataMapper } from 'ts/types/ConvertData.types';
import pt from 'constants/transfermarkt/ParsingTypes';
import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/getTableDataFromHTML';

export default <T extends pt>(html: string, type: T): TConvertedDataMapper[T] => {
    const { textData, htmlData } = getTableDataFromHTML(html, type);
    if (!textData && !htmlData) return [];

    return convertData({ textData, htmlData }, type);
};
