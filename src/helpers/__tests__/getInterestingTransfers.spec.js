import getInterestingTransfers from 'helpers/getInterestingTransfers';
import { MILLIONS, THOUSANDS, LOAN_FEE } from 'constants/transfermarkt';

const data = [
    {
        marketValue: `6,00 ${MILLIONS} €`, // + 0
        fee: `2,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `3,00 ${MILLIONS} €`, // + 1
        fee: `10,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `1,00 ${MILLIONS} €`, // - 2
        fee: `2,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `5,00 ${MILLIONS} €`, // + 3
        fee: `2,50 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `1,50 ${MILLIONS} €`, // + 4
        fee: `5,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `10,50 ${MILLIONS} €`, // + 5
        fee: `45,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `1,00 ${MILLIONS} €`, // - 6
        fee: 'Loan',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `1,50 ${MILLIONS} €`, // - 7
        fee: 'Free Transfer',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `4,90 ${MILLIONS} €`, // - 8
        fee: '?',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `5,25 ${MILLIONS} €`, // + 9
        fee: 'Loan',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `8,00 ${MILLIONS} €`, // + 10
        fee: 'Free Transfer',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `10,30 ${MILLIONS} €`, // + 11
        fee: '?',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `1,00 ${MILLIONS} €`, // + 12
        fee: `${LOAN_FEE}10,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `10,00 ${MILLIONS} €`, // + 13
        fee: `${LOAN_FEE}10,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `3,70 ${MILLIONS} €`, // - 14
        fee: `${LOAN_FEE}4,80 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `500 ${THOUSANDS} €`, // + 15
        fee: `${LOAN_FEE}10,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `900 ${THOUSANDS} €`, // + 16
        fee: `25,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `900 ${THOUSANDS} €`, // - 17
        fee: '800 Th. €',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `900 ${THOUSANDS} €`, // - 18
        fee: `2,00 ${MILLIONS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `300 ${THOUSANDS} €`, // - 19
        fee: 'Loan',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `500 ${THOUSANDS} €`, // - 20
        fee: 'Free Transfer',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `400 ${THOUSANDS} €`, // - 21
        fee: '?',
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `2,00 ${MILLIONS} €`, // - 22
        fee: `900 ${THOUSANDS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `15,00 ${MILLIONS} €`, // + 23
        fee: `900 ${THOUSANDS} €`,
        highestMarketValue: `2,00 ${MILLIONS} €`
    },
    {
        marketValue: `400 ${THOUSANDS} €`, // + 24
        fee: `900 ${THOUSANDS} €`,
        highestMarketValue: `10,00 ${MILLIONS} €`
    },
    {
        marketValue: `400 ${THOUSANDS} €`, // - 25
        fee: `900 ${THOUSANDS} €`,
        highestMarketValue: `5,00 ${MILLIONS} €`
    },
    {
        marketValue: `2,00 ${MILLIONS} €`, // - 26
        fee: `2,00 ${MILLIONS} €`,
        highestMarketValue: `4,00 ${MILLIONS} €`
    },
    {
        marketValue: `3,00 ${MILLIONS} €`, // + 27
        fee: 'Free Transfer',
        highestMarketValue: `5,50 ${MILLIONS} €`
    }
];

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

        expect(expectedResult).toEqual(result);
    });
});
