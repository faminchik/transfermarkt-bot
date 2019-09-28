import pt from 'constants/transfermarkt/ParsingTypes';
import { TTransferEntity, TClubEntity, TTeamTransferEntity } from './Entities.types';

export type TConvertedData = TTransferEntity[] | TClubEntity[] | TTeamTransferEntity[];

export type TConvertedDataMapper = {
    [pt.ALL_LATEST_TRANSFERS]?: TTransferEntity[];
    [pt.SEARCH_CLUBS]?: TClubEntity[];
    [pt.TEAM_TRANSFERS_ARRIVALS]?: TTeamTransferEntity[];
    [pt.TEAM_TRANSFERS_DEPARTURES]?: TTeamTransferEntity[];
};
