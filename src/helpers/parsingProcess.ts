import _ from 'lodash';
import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/getTableDataFromHTML';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';

export default (html, types = []) =>
    _.reduce(
        types,
        (result, type) => {
            const { textData, htmlData } = getTableDataFromHTML(html, type);
            if (!textData && !htmlData) {
                result[type] = [];
                return result;
            }

            const strategy = ConvertDataStrategies[type];
            const config = ConvertDataConfig[strategy];
            const convertedData = convertData({ textData, htmlData }, config);

            result[type] = convertedData;
            return result;
        },
        {}
    );
