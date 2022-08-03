import _ from 'lodash';
import MockDate from 'mockdate';
import momentTimezone from 'moment-timezone';
import { getLowerDate, getTransferPeriodType, getYearForTransferPeriod } from 'helpers/dateHelper';
import { SUMMER_TRANSFERS, WINTER_TRANSFERS } from 'constants/Transfermarkt';

describe('dateHelper', () => {
    beforeEach(() => {
        MockDate.reset();
        momentTimezone.tz.setDefault('utc');
    });

    afterEach(() => {
        MockDate.reset();
        momentTimezone.tz.setDefault();
    });

    describe('#getLowerDate', () => {
        test('should return the lower date with the default days number', () => {
            MockDate.set('2018-12-22');
            const result = getLowerDate();
            expect(result).toMatchInlineSnapshot(`"2018-12-20T00:00:00.000Z"`);
        });

        test('should return the lower date with a custom days number', () => {
            MockDate.set('2018-12-22');
            const result = getLowerDate(5);
            expect(result).toMatchInlineSnapshot(`"2018-12-17T00:00:00.000Z"`);
        });

        test('should return the lower date with the default days number if the provided days number is nagative', () => {
            MockDate.set('2018-12-22');
            const result = getLowerDate(-10);
            expect(result).toMatchInlineSnapshot(`"2018-12-20T00:00:00.000Z"`);
        });
    });

    describe('#getTransferPeriodType', () => {
        test('should return Winter Transfer Period type for [Jan-May] months', () => {
            _.each(_.range(0, 5), (monthNumber) => {
                MockDate.set(`2018-${monthNumber + 1}-20`);
                const result = getTransferPeriodType();
                expect(result).toEqual(WINTER_TRANSFERS);
            });
        });

        test('should return Summer Transfer Period type for [Jun-Dec] months', () => {
            _.each(_.range(5, 12), (monthNumber) => {
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
            expect(result).toBe(2017);
        });

        test('should return a current year if last transfer period is summer', () => {
            MockDate.set('2018-8-20');
            const result = getYearForTransferPeriod();
            expect(result).toBe(2018);
        });
    });
});
