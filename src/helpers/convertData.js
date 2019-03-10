import _ from 'lodash';
import { transposeArrays, formArrayByKeys } from 'utils/arrayMethods';
import { TEXT, HTML } from 'constants/transfermarkt/TableDataTypes';

const convertData = (data, congfig) => {
    const compactedData = _.map(data, _.compact);

    const convertedData = _.reduce(
        _.keys(congfig),
        (acc, indexItem) => {
            const { key, handler } = congfig[indexItem];
            const data = compactedData[indexItem];

            acc[key] = _.isFunction(handler) ? handler(data) : data;
            return acc;
        },
        {}
    );

    const transposedData = transposeArrays(_.values(convertedData));
    return formArrayByKeys(transposedData, _.keys(convertedData));
};

export default ({ textData, htmlData }, congfig) => {
    const convertedHtmlData = convertData(htmlData, congfig[HTML]);
    const convertedTextData = convertData(textData, congfig[TEXT]);

    return _.merge([], convertedTextData, convertedHtmlData);
};
