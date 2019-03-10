import _ from 'lodash';
import { splitByQuantity } from 'utils/arrayMethods';

describe('arrayMethods', () => {
    describe('#splitByQuantity', () => {
        test('should return splitted array correctly | 1', () => {
            const data = _.range(1, 55);
            const quantity = 20;
            const expectedResult = [_.range(1, 21), _.range(21, 41), _.range(41, 55)];

            const result = splitByQuantity(data, quantity);
            expect(result).toEqual(expectedResult);
        });

        test('should return splitted array correctly | 2', () => {
            const data = _.range(1, 61);
            const quantity = 20;
            const expectedResult = [_.range(1, 21), _.range(21, 41), _.range(41, 61)];

            const result = splitByQuantity(data, quantity);
            expect(result).toEqual(expectedResult);
        });

        test('should return splitted array correctly | 3', () => {
            const data = _.range(1, 19);
            const quantity = 5;
            const expectedResult = [
                _.range(1, 6),
                _.range(6, 11),
                _.range(11, 16),
                _.range(16, 19)
            ];

            const result = splitByQuantity(data, quantity);
            expect(result).toEqual(expectedResult);
        });

        test('should return splitted array correctly | 4', () => {
            const data = _.range(1, 16);
            const quantity = 20;
            const expectedResult = [_.range(1, 16)];

            const result = splitByQuantity(data, quantity);
            expect(result).toEqual(expectedResult);
        });

        test('should return all array as the first item if quantity is undefined', () => {
            const data = _.range(1, 16);
            const expectedResult = [data];

            const result = splitByQuantity(data);
            expect(result).toEqual(expectedResult);
        });

        test('should return empty array if array is empty', () => {
            const data = [];
            const quantity = 15;
            const expectedResult = [];

            const result = splitByQuantity(data, quantity);
            expect(result).toEqual(expectedResult);
        });
    });
});
