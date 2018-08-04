import _ from 'lodash';

const validDataIndexes = [2, 4, 8, 12, 14, 15, 16];
const config = ['name', 'age', 'leftTeam', 'joinedTeam', 'transferDate', 'marketValue', 'fee'];

export default data => {
    const compactedData = _.map(data, item => _.compact(item));

    const neededData = _.filter(compactedData, (item, index) =>
        _.includes(validDataIndexes, index)
    );

    neededData[1].splice(0, 1);
    neededData[0] = _.filter(neededData[0], (player, index) => index % 2 === 1);

    const transformedData = _.reduce(
        neededData,
        (acc, array) => {
            _.map(array, (item, i) => {
                if (!_.isArray(acc[i])) acc[i] = [];
                acc[i].push(item);
            });
            return acc;
        },
        []
    );

    return _.map(transformedData, item =>
        _.reduce(
            item,
            (acc, param, index) => ({
                ...acc,
                [config[index]]: param
            }),
            {}
        )
    );
};
