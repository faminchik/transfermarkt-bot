import getTableDataFromHTML from 'helpers/allLatestTransfers/getTableDataFromHTML';
import getTableDataFromHTMLSeacrh from 'helpers/search/getTableDataFromHTML';
import convertData from 'helpers/convertData';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';
import { ALL_LATEST_TRANSFERS } from 'constants/transfermarkt/ConvertDataTypes';
import * as st from 'constants/transfermarkt/SearchTypes';

import allLatestTransfersHtml from './data/allLatestTransfers-data';
import allLatestTransfersExpectedResult from './results/allLatestTransfers-results';
import searchResultHtml from './data/searchResult-data';
import { clubsSeacrhExpectedResult } from './results/searchResult-results';

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
                debugger;
                const type = st.SEARCH_CLUBS;
                const { textData, htmlData } = getTableDataFromHTMLSeacrh(searchResultHtml, type);

                const strategy = ConvertDataStrategies[type];
                const config = ConvertDataConfig[strategy];
                const clubs = convertData({ textData, htmlData }, config);

                expect(clubs).toEqual(clubsSeacrhExpectedResult);
            });
        });
    });
});
