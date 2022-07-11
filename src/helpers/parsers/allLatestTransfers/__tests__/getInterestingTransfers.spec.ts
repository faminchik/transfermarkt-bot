import getInterestingTransfers from 'helpers/parsers/allLatestTransfers/getInterestingTransfers';
import { MILLIONS, THOUSANDS, LOAN_FEE, EURO, DELIMITER } from 'constants/Transfermarkt';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

const formTransferFullEntity = (data: Partial<TTransferFullEntity>[]): TTransferFullEntity[] =>
    data.map((item) => {
        const { marketValue = '', fee = '', highestMarketValue = '' } = item;

        return {
            marketValue,
            fee,
            highestMarketValue,
            name: '',
            age: '',
            nationality: '',
            leftTeam: '',
            joinedTeam: '',
            transferDate: '',
            profileLink: ''
        };
    });

const formPriceInMillions = (integerPart: string, hundredthPart: string) =>
    EURO + integerPart + DELIMITER + hundredthPart + MILLIONS; // €6.00m

const formPriceInThousands = (integerPart: string) => EURO + integerPart + THOUSANDS; // €600k

const formLoanWithPriceInMillions = (integerPart: string, hundredthPart: string) =>
    LOAN_FEE + formPriceInMillions(integerPart, hundredthPart);

const data = formTransferFullEntity([
    {
        marketValue: formPriceInMillions('6', '00'), // + 0
        fee: formPriceInMillions('2', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('3', '00'), // + 1
        fee: formPriceInMillions('10', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('1', '00'), // - 2
        fee: formPriceInMillions('2', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('5', '00'), // + 3
        fee: formPriceInMillions('2', '50'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('1', '50'), // + 4
        fee: formPriceInMillions('5', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('10', '50'), // + 5
        fee: formPriceInMillions('45', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('1', '00'), // - 6
        fee: 'Loan',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('1', '50'), // - 7
        fee: 'Free Transfer',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('4', '90'), // - 8
        fee: '?',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('5', '25'), // + 9
        fee: 'Loan',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('8', '00'), // + 10
        fee: 'Free Transfer',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('10', '30'), // + 11
        fee: '?',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('1', '00'), // + 12
        fee: formLoanWithPriceInMillions('10', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('10', '00'), // + 13
        fee: formLoanWithPriceInMillions('10', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('3', '70'), // - 14
        fee: formLoanWithPriceInMillions('4', '80'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('500'), // + 15
        fee: formLoanWithPriceInMillions('10', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('900'), // + 16
        fee: formPriceInMillions('25', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('900'), // - 17
        fee: formPriceInThousands('800'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('900'), // - 18
        fee: formPriceInMillions('2', '00'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('300'), // - 19
        fee: 'Loan',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('500'), // - 20
        fee: 'Free Transfer',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('400'), // - 21
        fee: '?',
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('2', '00'), // - 22
        fee: formPriceInThousands('900'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInMillions('15', '00'), // + 23
        fee: formPriceInThousands('900'),
        highestMarketValue: formPriceInMillions('2', '00')
    },
    {
        marketValue: formPriceInThousands('400'), // + 24
        fee: formPriceInThousands('900'),
        highestMarketValue: formPriceInMillions('10', '00')
    },
    {
        marketValue: formPriceInThousands('400'), // - 25
        fee: formPriceInThousands('900'),
        highestMarketValue: formPriceInMillions('5', '00')
    },
    {
        marketValue: formPriceInMillions('2', '00'), // - 26
        fee: formPriceInMillions('2', '00'),
        highestMarketValue: formPriceInMillions('9', '00')
    },
    {
        marketValue: formPriceInMillions('3', '00'), // + 27
        fee: 'Free Transfer',
        highestMarketValue: formPriceInMillions('10', '50')
    }
]);

const expectedResult = [
    data[0],
    data[1],
    data[3],
    data[4],
    data[5],
    data[9],
    data[10],
    data[11],
    data[12],
    data[13],
    data[15],
    data[16],
    data[23],
    data[24],
    data[27]
];

describe('getInterestingTransfers', () => {
    test('should return interesting transfers correctly', () => {
        const result = getInterestingTransfers(data);

        expect(result).toEqual(expectedResult);
    });
});
