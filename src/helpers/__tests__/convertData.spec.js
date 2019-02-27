import getTableDataFromHTML from 'helpers/allLatestTransfers/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import config from 'configs/convertDataConfig';
import { ALL_LATEST_TRANSFERS } from 'constants/transfermarkt/ConvertDataTypes';
import html from './data/convertData_data';

const expectedResult = [
    {
        name: 'Quentin Westberg',
        age: '32',
        leftTeam: 'AJ Auxerre',
        joinedTeam: 'Toronto FC',
        transferDate: 'Feb 25, 2019',
        marketValue: '600 Th. €',
        fee: '?',
        nationality: 'United States',
        leftTeamCountry: 'France',
        joinedTeamCountry: 'Canada'
    },
    {
        name: 'Kévin Boli',
        age: '27',
        leftTeam: 'GZ Hengfeng',
        joinedTeam: 'CFR Cluj',
        transferDate: 'Feb 24, 2019',
        marketValue: '1,20 Mill. €',
        fee: 'Loan',
        nationality: "Cote d'Ivoire",
        leftTeamCountry: 'China',
        joinedTeamCountry: 'Romania'
    },
    {
        name: 'Yuning Zhang',
        age: '22',
        leftTeam: 'West Brom',
        joinedTeam: 'BJ Sinobo Guoan',
        transferDate: 'Feb 24, 2019',
        marketValue: '1,50 Mill. €',
        fee: '?',
        nationality: 'China',
        leftTeamCountry: 'England',
        joinedTeamCountry: 'China'
    },
    {
        name: 'Anton Maglica',
        age: '27',
        leftTeam: 'Apol. Limassol',
        joinedTeam: 'GZ Hengfeng',
        transferDate: 'Feb 24, 2019',
        marketValue: '1,50 Mill. €',
        fee: '450 Th. €',
        nationality: 'Croatia',
        leftTeamCountry: 'Cyprus',
        joinedTeamCountry: 'China'
    },
    {
        name: 'Sone Aluko',
        age: '30',
        leftTeam: 'Reading',
        joinedTeam: 'BJ Renhe',
        transferDate: 'Feb 23, 2019',
        marketValue: '3,50 Mill. €',
        fee: '?',
        nationality: 'Nigeria',
        leftTeamCountry: 'England',
        joinedTeamCountry: 'China'
    },
    {
        name: 'C.J. Sapong',
        age: '30',
        leftTeam: 'Philadelphia',
        joinedTeam: 'Chicago Fire',
        transferDate: 'Feb 23, 2019',
        marketValue: '1,25 Mill. €',
        fee: '400 Th. €',
        nationality: 'United States',
        leftTeamCountry: 'United States',
        joinedTeamCountry: 'United States'
    },
    {
        name: 'Lacina Traoré',
        age: '28',
        leftTeam: 'Without Club',
        joinedTeam: 'Újpest FC',
        transferDate: 'Feb 23, 2019',
        marketValue: '2,50 Mill. €',
        fee: '-',
        nationality: "Cote d'Ivoire",
        leftTeamCountry: '',
        joinedTeamCountry: 'Hungary'
    },
    {
        name: 'Andrii Tkachuk',
        age: '31',
        leftTeam: 'Akzhayik',
        joinedTeam: 'Atyrau',
        transferDate: 'Feb 23, 2019',
        marketValue: '600 Th. €',
        fee: 'Free Transfer',
        nationality: 'Ukraine',
        leftTeamCountry: 'Kazakhstan',
        joinedTeamCountry: 'Kazakhstan'
    },
    {
        name: 'André',
        age: '28',
        leftTeam: 'Sport Recife',
        joinedTeam: 'Grêmio',
        transferDate: 'Feb 22, 2019',
        marketValue: '2,75 Mill. €',
        fee: '2,50 Mill. €',
        nationality: 'Brazil',
        leftTeamCountry: 'Brazil',
        joinedTeamCountry: 'Brazil'
    },
    {
        name: 'Alan Chochiev',
        age: '27',
        leftTeam: 'KS Samara',
        joinedTeam: 'Without Club',
        transferDate: 'Feb 22, 2019',
        marketValue: '700 Th. €',
        fee: '-',
        nationality: 'Russia',
        leftTeamCountry: 'Russia',
        joinedTeamCountry: ''
    },
    {
        name: 'Viacheslav Tankovskyi',
        age: '23',
        leftTeam: 'Shakhtar D.',
        joinedTeam: 'Arsenal Kyiv',
        transferDate: 'Feb 22, 2019',
        marketValue: '500 Th. €',
        fee: 'Loan',
        nationality: 'Ukraine',
        leftTeamCountry: 'Ukraine',
        joinedTeamCountry: 'Ukraine'
    },
    {
        name: 'Javokhir Sidikov',
        age: '22',
        leftTeam: 'Kokand 1912',
        joinedTeam: 'Pakhtakor',
        transferDate: 'Feb 22, 2019',
        marketValue: '600 Th. €',
        fee: '?',
        nationality: 'Uzbekistan',
        leftTeamCountry: 'Uzbekistan',
        joinedTeamCountry: 'Uzbekistan'
    },
    {
        name: 'José León',
        age: '24',
        leftTeam: 'Rayo Vallecano',
        joinedTeam: 'AFC Eskilstuna',
        transferDate: 'Feb 22, 2019',
        marketValue: '800 Th. €',
        fee: 'Loan',
        nationality: 'Spain',
        leftTeamCountry: 'Spain',
        joinedTeamCountry: 'Sweden'
    },
    {
        name: 'Muris Mesanovic',
        age: '28',
        leftTeam: 'Slavia Prag',
        joinedTeam: 'Mladá Boleslav',
        transferDate: 'Feb 22, 2019',
        marketValue: '600 Th. €',
        fee: '?',
        nationality: 'Bosnia-Herzegovina',
        leftTeamCountry: 'Czech Republic',
        joinedTeamCountry: 'Czech Republic'
    },
    {
        name: 'Jan Sykora',
        age: '25',
        leftTeam: 'Slavia Prag',
        joinedTeam: 'Slovan Liberec',
        transferDate: 'Feb 22, 2019',
        marketValue: '1,25 Mill. €',
        fee: 'Loan',
        nationality: 'Czech Republic',
        leftTeamCountry: 'Czech Republic',
        joinedTeamCountry: 'Czech Republic'
    },
    {
        name: 'Jakub Jugas',
        age: '26',
        leftTeam: 'Slavia Prag',
        joinedTeam: 'Mladá Boleslav',
        transferDate: 'Feb 22, 2019',
        marketValue: '1,25 Mill. €',
        fee: 'Loan',
        nationality: 'Czech Republic',
        leftTeamCountry: 'Czech Republic',
        joinedTeamCountry: 'Czech Republic'
    },
    {
        name: 'Filip Panak',
        age: '23',
        leftTeam: 'MFK Karvina',
        joinedTeam: 'Sparta Praha',
        transferDate: 'Feb 22, 2019',
        marketValue: '800 Th. €',
        fee: '?',
        nationality: 'Czech Republic',
        leftTeamCountry: 'Czech Republic',
        joinedTeamCountry: 'Czech Republic'
    },
    {
        name: 'Timofey Margasov',
        age: '26',
        leftTeam: 'Loko Moscow',
        joinedTeam: 'Sochi',
        transferDate: 'Feb 22, 2019',
        marketValue: '500 Th. €',
        fee: 'Loan',
        nationality: 'Russia',
        leftTeamCountry: 'Russia',
        joinedTeamCountry: 'Russia'
    },
    {
        name: 'Dorin Rotariu',
        age: '23',
        leftTeam: 'Club Brugge',
        joinedTeam: 'FC Astana',
        transferDate: 'Feb 22, 2019',
        marketValue: '1,00 Mill. €',
        fee: '?',
        nationality: 'Romania',
        leftTeamCountry: 'Belgium',
        joinedTeamCountry: 'Kazakhstan'
    },
    {
        name: 'David Stockdale',
        age: '33',
        leftTeam: 'Coventry',
        joinedTeam: 'Birmingham',
        transferDate: 'Feb 22, 2019',
        marketValue: '1,00 Mill. €',
        fee: 'End of loan',
        nationality: 'England',
        leftTeamCountry: 'England',
        joinedTeamCountry: 'England'
    },
    {
        name: 'Borek Dockal',
        age: '30',
        leftTeam: 'HN Jianye',
        joinedTeam: 'Sparta Praha',
        transferDate: 'Feb 22, 2019',
        marketValue: '2,00 Mill. €',
        fee: '1,30 Mill. €',
        nationality: 'Czech Republic',
        leftTeamCountry: 'China',
        joinedTeamCountry: 'Czech Republic'
    },
    {
        name: 'Mohammed Rabiu',
        age: '29',
        leftTeam: 'Anzhi',
        joinedTeam: 'KS Samara',
        transferDate: 'Feb 22, 2019',
        marketValue: '600 Th. €',
        fee: 'Free Transfer',
        nationality: 'Ghana',
        leftTeamCountry: 'Russia',
        joinedTeamCountry: 'Russia'
    },
    {
        name: 'Yuning Zhang',
        age: '22',
        leftTeam: 'ADO Den Haag',
        joinedTeam: 'West Brom',
        transferDate: 'Feb 22, 2019',
        marketValue: '1,50 Mill. €',
        fee: 'End of loan',
        nationality: 'China',
        leftTeamCountry: 'Netherlands',
        joinedTeamCountry: 'England'
    },
    {
        name: 'Filipe Nascimento',
        age: '24',
        leftTeam: 'Levski Sofia',
        joinedTeam: 'Poli. Iasi',
        transferDate: 'Feb 21, 2019',
        marketValue: '700 Th. €',
        fee: 'Loan',
        nationality: 'Portugal',
        leftTeamCountry: 'Bulgaria',
        joinedTeamCountry: 'Romania'
    },
    {
        name: 'Dylan Flores',
        age: '25',
        leftTeam: 'FC Poli Iasi',
        joinedTeam: 'Sepsi Sf. Gh.',
        transferDate: 'Feb 21, 2019',
        marketValue: '700 Th. €',
        fee: '90 Th. €',
        nationality: 'Costa Rica',
        leftTeamCountry: 'Romania',
        joinedTeamCountry: 'Romania'
    }
];

describe('convertData', () => {
    describe('allLatestTransfers', () => {
        test('should convert html data in a correct way', () => {
            const { textData, htmlData } = getTableDataFromHTML(html);
            const transfersInfo = convertData({ textData, htmlData }, config[ALL_LATEST_TRANSFERS]);

            expect(transfersInfo).toEqual(expectedResult);
        });
    });
});
