import _ from 'lodash';
import cheerio from 'cheerio';

const transposeArrays = arrays =>
    _.reduce(
        arrays,
        (acc, array) => {
            _.map(array, (item, i) => {
                if (!_.isArray(acc[i])) acc[i] = [];
                acc[i].push(item);
            });
            return acc;
        },
        []
    );

const formArrayWithConfig = (array, config) =>
    _.map(array, item =>
        _.reduce(
            item,
            (acc, param, index) => ({
                ...acc,
                [config[index]]: param
            }),
            {}
        )
    );

const validTextDataIndexes = [2, 4, 8, 12, 14, 15, 16];
const configText = ['name', 'age', 'leftTeam', 'joinedTeam', 'transferDate', 'marketValue', 'fee'];

const validHtmlDataIndexes = [5];
const configHtml = ['nationality'];

const convertTextData = textData => {
    const compactedTextData = _.map(textData, item => _.compact(item));

    const neededTextData = _.filter(compactedTextData, (item, index) =>
        _.includes(validTextDataIndexes, index)
    );

    neededTextData[1].splice(0, 1);
    neededTextData[0] = _.filter(neededTextData[0], (player, index) => index % 2 === 1);

    const transformedTextData = transposeArrays(neededTextData);

    return formArrayWithConfig(transformedTextData, configText);
};

const convertHtmlData = htmlData => {
    const compactedHtmlData = _.map(htmlData, item => _.compact(item));

    const neededHtmlData = _.filter(compactedHtmlData, (item, index) =>
        _.includes(validHtmlDataIndexes, index)
    );

    neededHtmlData[0].splice(0, 1);
    neededHtmlData[0] = _.map(neededHtmlData[0], item => {
        const $ = cheerio.load(item);
        return $('img').attr('alt');
    });

    const transformedHtmlData = transposeArrays(neededHtmlData);

    return formArrayWithConfig(transformedHtmlData, configHtml);
};

export default ({ textData, htmlData }) => {
    const convertedTextData = convertTextData(textData);
    const convertedHtmlData = convertHtmlData(htmlData);

    const resultData = [];
    for (let i = 0; i < _.size(convertedTextData); i++) {
        resultData.push(convertedTextData[i]);
        if (convertedHtmlData[i]) {
            resultData[i] = {
                ...resultData[i],
                ...convertedHtmlData[i]
            };
        }
    }

    return resultData;
};
