import _ from 'lodash';
import { transposeArrays, formArrayByKeys } from 'utils/arrayMethods';
import tdt from 'constants/transfermarkt/TableDataTypes';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';
import type { TConvertDataConfigElement } from 'ts/ConvertDataConfigTS';
import type { IParsedTable } from 'ts/ParseTableTS';
import type { TConvertedDataMapper } from 'ts/ConvertDataTS';
import type pt from 'constants/transfermarkt/ParsingTypes';

type ParsedData = { [key: string]: string[] };

const convertData = (data: string[][], config: TConvertDataConfigElement) => {
    const compactedData = _.map(data, _.compact);

    const parsedData = _.reduce(
        _.keys(config),
        (acc: ParsedData, indexItem) => {
            const { key, handler } = config[_.toNumber(indexItem)] ?? {};
            const data = compactedData[_.toNumber(indexItem)];

            if (!key || !data) return acc;

            acc[key] = _.isFunction(handler) ? handler(data) : data;
            return acc;
        },
        {}
    );

    const transposedData = transposeArrays(_.values(parsedData));
    return formArrayByKeys(transposedData, _.keys(parsedData));
};

export default <T extends pt>({ textData, htmlData }: IParsedTable, type: T): TConvertedDataMapper[T] => {
    const strategy = ConvertDataStrategies[type];
    const config = ConvertDataConfig[strategy];

    const convertedHtmlData = convertData(htmlData, config[tdt.HTML]);
    const convertedTextData = convertData(textData, config[tdt.TEXT]);

    return _.merge([], convertedTextData, convertedHtmlData);
};
