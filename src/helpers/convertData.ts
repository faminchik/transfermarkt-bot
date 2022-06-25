import _ from 'lodash';
import { TConvertDataConfigElement } from 'ts/types/ConvertDataConfig.types';
import { IParsedTable } from 'ts/interfaces/ParseTable.interfaces';
import { TConvertedDataMapper } from 'ts/types/ConvertData.types';
import { transposeArrays, formArrayByKeys } from 'utils/arrayMethods';
import tdt from 'constants/transfermarkt/TableDataTypes';
import pt from 'constants/transfermarkt/ParsingTypes';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';

type ParsedData = { [key: string]: string[] };

const convertData = (data: CheerioParsedTable, config: TConvertDataConfigElement) => {
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
