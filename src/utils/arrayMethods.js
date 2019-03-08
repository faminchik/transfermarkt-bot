import _ from 'lodash';

export const transposeArrays = arrays =>
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

export const formArrayByKeys = (array, keys) =>
    _.map(array, item =>
        _.reduce(
            item,
            (acc, param, index) => ({
                ...acc,
                [keys[index]]: param
            }),
            {}
        )
    );

export const splitByQuantity = (array = [], number) => {
    if (!_.isNumber(number)) number = _.size(array);

    const { result } = _.reduce(
        array,
        ({ result, arrayItems }, item, index) => {
            arrayItems.push(item);

            if ((index + 1) % number === 0) {
                result.push(arrayItems);
                arrayItems = [];
            } else if (index + 1 === _.size(array)) {
                result.push(arrayItems);
            }

            return { arrayItems, result };
        },
        { arrayItems: [], result: [] }
    );

    return result;
};
