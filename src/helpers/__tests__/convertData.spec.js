import parsingProcess from 'helpers/parsingProcess';
import * as pt from 'constants/transfermarkt/ParsingTypes';

import allLatestTransfersHtml from './data/allLatestTransfers-data';
import searchResultHtml from './data/searchResult-data';
import teamTransfersHtml from './data/teamTransfers-data';

import allLatestTransfersExpectedResult from './results/allLatestTransfers-results';
import { clubsSeacrhExpectedResult } from './results/searchResult-results';
import {
    arrivalsTeamTransfersExpectedResult,
    departuresTeamTransfersExpectedResult
} from './results/teamTransfers-results';

describe('convertData', () => {
    describe('allLatestTransfers', () => {
        test('should convert html data in a correct way', () => {
            const types = [pt.ALL_LATEST_TRANSFERS];
            const parsingResult = parsingProcess(allLatestTransfersHtml, types);

            const transfersInfo = parsingResult[pt.ALL_LATEST_TRANSFERS];
            expect(transfersInfo).toEqual(allLatestTransfersExpectedResult);
        });
    });

    describe('search', () => {
        describe('clubsSearch', () => {
            test('should convert html data in a correct way', () => {
                const types = [pt.SEARCH_CLUBS];
                const parsingResult = parsingProcess(searchResultHtml, types);

                const clubs = parsingResult[pt.SEARCH_CLUBS];
                expect(clubs).toEqual(clubsSeacrhExpectedResult);
            });
        });
    });

    describe('teamTransfers', () => {
        describe('arrivals transfers', () => {
            test('should convert html data in a correct way', () => {
                const types = [pt.TEAM_TRANSFERS_ARRIVALS];
                const parsingResult = parsingProcess(teamTransfersHtml, types);

                const arrivalsTeamTransfers = parsingResult[pt.TEAM_TRANSFERS_ARRIVALS];
                expect(arrivalsTeamTransfers).toEqual(arrivalsTeamTransfersExpectedResult);
            });
        });

        describe('departures transfers', () => {
            test('should convert html data in a correct way', () => {
                const types = [pt.TEAM_TRANSFERS_DEPARTURES];
                const parsingResult = parsingProcess(teamTransfersHtml, types);

                const departuresTeamTransfers = parsingResult[pt.TEAM_TRANSFERS_DEPARTURES];
                expect(departuresTeamTransfers).toEqual(departuresTeamTransfersExpectedResult);
            });
        });
    });
});
