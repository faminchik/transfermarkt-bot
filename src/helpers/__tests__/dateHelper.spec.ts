import _ from 'lodash';
import MockDate from 'mockdate';
import { getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import { SUMMER_TRANSFERS, WINTER_TRANSFERS } from 'constants/Transfermarkt';

describe('dateHelper', () => {
    beforeEach(() => {
        MockDate.reset();
    });

    afterEach(() => {
        MockDate.reset();
    });

    describe('#getTransferPeriodType', () => {
        test('should return Winter Transfer Period type for [Jan-May] months', () => {
            _.each(_.range(0, 5), monthNumber => {
                MockDate.set(`2018-${monthNumber + 1}-20`);
                const result = getTransferPeriodType();
                expect(result).toEqual(WINTER_TRANSFERS);
            });
        });

        test('should return Summer Transfer Period type for [Jun-Dec] months', () => {
            _.each(_.range(5, 12), monthNumber => {
                MockDate.set(`2018-${monthNumber + 1}-20`);
                const result = getTransferPeriodType();
                expect(result).toEqual(SUMMER_TRANSFERS);
            });
        });
    });

    describe('#getYearForTransferPeriod', () => {
        test('should return a previous year if last transfer period is winter', () => {
            MockDate.set('2018-4-20');
            const result = getYearForTransferPeriod();
            expect(result).toEqual(2017);
        });

        test('should return a current year if last transfer period is summer', () => {
            MockDate.set('2018-8-20');
            const result = getYearForTransferPeriod();
            expect(result).toEqual(2018);
        });
    });
});
