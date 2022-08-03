import parsingProcess from 'helpers/parsingProcess';
import pt from 'constants/transfermarkt/ParsingTypes';
import ptm from 'constants/transfermarkt/ParsingTableModes';

import allLatestTransfersHtml from './data/allLatestTransfers.data';
import searchResultHtml from './data/searchResult.data';
import teamTransfersHtml from './data/teamTransfers.data';
import playerProfileHtml from './data/playerProfile.data';

describe('convertData', () => {
    describe('allLatestTransfers', () => {
        test('should convert html data in a correct way', () => {
            const transfersInfo = parsingProcess(allLatestTransfersHtml, pt.ALL_LATEST_TRANSFERS, ptm.TABLE);

            expect(transfersInfo).toMatchSnapshot();
        });
    });

    describe('search', () => {
        describe('clubsSearch', () => {
            test('should convert html data in a correct way', () => {
                const clubs = parsingProcess(searchResultHtml, pt.SEARCH_CLUBS, ptm.TABLE);

                expect(clubs).toMatchSnapshot();
            });
        });

        describe('playersSearch', () => {
            test('should convert html data in a correct way', () => {
                const clubs = parsingProcess(searchResultHtml, pt.SEARCH_PLAYERS, ptm.TABLE);

                expect(clubs).toMatchSnapshot();
            });
        });
    });

    describe('teamTransfers', () => {
        describe('arrivals transfers', () => {
            test('should convert html data in a correct way', () => {
                const arrivalsTeamTransfers = parsingProcess(teamTransfersHtml, pt.TEAM_TRANSFERS_ARRIVALS, ptm.TABLE);

                expect(arrivalsTeamTransfers).toMatchSnapshot();
            });
        });

        describe('departures transfers', () => {
            test('should convert html data in a correct way', () => {
                const departuresTeamTransfers = parsingProcess(
                    teamTransfersHtml,
                    pt.TEAM_TRANSFERS_DEPARTURES,
                    ptm.TABLE
                );

                expect(departuresTeamTransfers).toMatchSnapshot();
            });
        });
    });

    describe('playerProfile', () => {
        describe('transfer history', () => {
            test('should convert html data in a correct way', () => {
                const clubs = parsingProcess(playerProfileHtml, pt.PLAYER_TRANSFERS_HISTORY, ptm.DIV);

                expect(clubs).toMatchSnapshot();
            });
        });
    });
});
