import getTableDataFromHTML from 'helpers/allLatestTransfers/getTableDataFromHTML';
import getTableDataFromHTMLSeacrh from 'helpers/search/getTableDataFromHTML';
import getTableDataFromHTMLTeam from 'helpers/teamTransfers/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';
import { ALL_LATEST_TRANSFERS } from 'constants/transfermarkt/ConvertDataTypes';
import * as st from 'constants/transfermarkt/SearchTypes';
import * as ttt from 'constants/transfermarkt/TeamTransfersTypes';

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
            const { textData, htmlData } = getTableDataFromHTML(allLatestTransfersHtml);

            const config = ConvertDataConfig[ALL_LATEST_TRANSFERS];
            const transfersInfo = convertData({ textData, htmlData }, config);

            expect(transfersInfo).toEqual(allLatestTransfersExpectedResult);
        });
    });

    describe('search', () => {
        describe('clubsSearch', () => {
            test('should convert html data in a correct way', () => {
                const type = st.SEARCH_CLUBS;
                const { textData, htmlData } = getTableDataFromHTMLSeacrh(searchResultHtml, type);

                const strategy = ConvertDataStrategies[type];
                const config = ConvertDataConfig[strategy];
                const clubs = convertData({ textData, htmlData }, config);

                expect(clubs).toEqual(clubsSeacrhExpectedResult);
            });
        });
    });

    describe('teamTransfers', () => {
        describe('arrivals transfers', () => {
            test('should convert html data in a correct way', () => {
                const type = ttt.TEAM_TRANSFERS_ARRIVALS;
                const { textData, htmlData } = getTableDataFromHTMLTeam(teamTransfersHtml, type);

                const strategy = ConvertDataStrategies[type];
                const config = ConvertDataConfig[strategy];
                const arrivalsTeamTransfers = convertData({ textData, htmlData }, config);

                expect(arrivalsTeamTransfers).toEqual(arrivalsTeamTransfersExpectedResult);
            });
        });

        describe('departures transfers', () => {
            test('should convert html data in a correct way', () => {
                const type = ttt.TEAM_TRANSFERS_DEPARTURES;
                const { textData, htmlData } = getTableDataFromHTMLTeam(teamTransfersHtml, type);

                const strategy = ConvertDataStrategies[type];
                const config = ConvertDataConfig[strategy];
                const departuresTeamTransfers = convertData({ textData, htmlData }, config);

                expect(departuresTeamTransfers).toEqual(departuresTeamTransfersExpectedResult);
            });
        });
    });
});
