import parsingProcess from 'helpers/parsingProcess';
import pt from 'constants/transfermarkt/ParsingTypes';

import allLatestTransfersHtml from './data/allLatestTransfers.data';
import searchResultHtml from './data/searchResult.data';
import teamTransfersHtml from './data/teamTransfers.data';

describe('convertData', () => {
    describe('allLatestTransfers', () => {
        test('should convert html data in a correct way', () => {
            const transfersInfo = parsingProcess(allLatestTransfersHtml, pt.ALL_LATEST_TRANSFERS);

            expect(transfersInfo).toMatchSnapshot();
        });
    });

    describe('search', () => {
        describe('clubsSearch', () => {
            test('should convert html data in a correct way', () => {
                const clubs = parsingProcess(searchResultHtml, pt.SEARCH_CLUBS);

                expect(clubs).toMatchSnapshot();
            });
        });

        describe('playersSearch', () => {
            test('should convert html data in a correct way', () => {
                const clubs = parsingProcess(searchResultHtml, pt.SEARCH_PLAYERS);

                expect(clubs).toMatchSnapshot();
            });
        });
    });

    describe('teamTransfers', () => {
        describe('arrivals transfers', () => {
            test('should convert html data in a correct way', () => {
                const arrivalsTeamTransfers = parsingProcess(teamTransfersHtml, pt.TEAM_TRANSFERS_ARRIVALS);

                expect(arrivalsTeamTransfers).toMatchSnapshot();
            });
        });

        describe('departures transfers', () => {
            test('should convert html data in a correct way', () => {
                const departuresTeamTransfers = parsingProcess(teamTransfersHtml, pt.TEAM_TRANSFERS_DEPARTURES);

                expect(departuresTeamTransfers).toMatchSnapshot();
            });
        });
    });
});
