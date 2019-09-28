import _ from 'lodash';
import { TTransferEntity, TClubEntity, TTeamTransferEntity } from 'ts/types/Entities.types';
import { TConvertedDataMapper } from 'ts/types/ConvertData.types';
import pt from 'constants/transfermarkt/ParsingTypes';
import convertData from 'helpers/convertData';
import getTableDataFromHTML from 'helpers/getTableDataFromHTML';
import ConvertDataConfig from 'configs/ConvertDataConfig';
import ConvertDataStrategies from 'configs/ConvertDataStrategies';

export default (html: string, types: readonly pt[] = []) =>
    _.reduce(
        types,
        (result: TConvertedDataMapper, type) => {
            const { textData, htmlData } = getTableDataFromHTML(html, type);
            if (!textData && !htmlData) {
                result[type] = [];
                return result;
            }

            const strategy = ConvertDataStrategies[type];
            const config = ConvertDataConfig[strategy];

            if (type === pt.ALL_LATEST_TRANSFERS) {
                const data = convertData({ textData, htmlData }, config) as TTransferEntity[];
                result[type] = data;
            }

            if (type === pt.SEARCH_CLUBS) {
                const data = convertData({ textData, htmlData }, config) as TClubEntity[];
                result[type] = data;
            }

            if (type === pt.TEAM_TRANSFERS_ARRIVALS || type === pt.TEAM_TRANSFERS_DEPARTURES) {
                const data = convertData({ textData, htmlData }, config) as TTeamTransferEntity[];
                result[type] = data;
            }

            return result;
        },
        {}
    );
