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
