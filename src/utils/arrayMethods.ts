import _ from 'lodash';

export function transposeArrays<T>(arrays: T[][]): T[][] {
    if (!arrays) return [];

    return _.reduce(
        arrays,
        (acc: T[][], array) => {
            _.each(array, (item, i) => {
                if (!_.isArray(acc[i])) acc[i] = [];
                acc[i].push(item);
            });
            return acc;
        },
        []
    );
}

export function formArrayByKeys<T>(array: T[][], keys: string[]): { [key: string]: T }[] {
    return _.map(array, item =>
        _.reduce(
            item,
            (acc: { [param: string]: T }, param, index) => ({
                ...acc,
                [keys[index]]: param
            }),
            {}
        )
    );
}
