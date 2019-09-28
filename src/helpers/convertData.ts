import _ from 'lodash';
import {
    TConvertDataConfigItem,
    TConvertDataConfigElement
} from 'ts/types/ConvertDataConfig.types';
import { IParsedTable } from 'ts/interfaces/ParseTable.interfaces';
import { TConvertedData } from 'ts/types/ConvertData.types';
import { transposeArrays, formArrayByKeys } from 'utils/arrayMethods';
import tdt from 'constants/transfermarkt/TableDataTypes';

type ParsedData = { [key: string]: string[] };

const convertData = (data: CheerioParsedTable, config: TConvertDataConfigElement) => {
    const compactedData = _.map(data, _.compact);

    const parsedData = _.reduce(
        _.keys(config),
        (acc: ParsedData, indexItem) => {
            const { key, handler } = config[_.toNumber(indexItem)];
            const data = compactedData[_.toNumber(indexItem)];

            acc[key] = _.isFunction(handler) ? handler(data) : data;
            return acc;
        },
        {}
    );

    const transposedData = transposeArrays(_.values(parsedData));
    return formArrayByKeys(transposedData, _.keys(parsedData));
};

export default (
    { textData, htmlData }: IParsedTable,
    config: TConvertDataConfigItem
): TConvertedData => {
    const convertedHtmlData = convertData(htmlData, config[tdt.HTML]);
    const convertedTextData = convertData(textData, config[tdt.TEXT]);

    return _.merge([], convertedTextData, convertedHtmlData);
};
