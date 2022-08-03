import _ from 'lodash';
import searchClubsProcess from 'helpers/parsers/searchClubs/searchClubsProcess';
import type { TClubEntity } from 'ts/EntitiesTS';

export default async (query: string): Promise<{ clubs: TClubEntity[] }> => {
    const searchClubsResult = await searchClubsProcess(query);

    const clubs = _.take(searchClubsResult, 3);

    return { clubs };
};
