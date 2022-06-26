import _ from 'lodash';
import searchProcess from 'helpers/search/searchProcess';
import type { TClubEntity } from 'ts/EntitiesTS';

export default async (query: string): Promise<{ clubs: TClubEntity[] }> => {
    const searchResult = await searchProcess(query);

    const clubs = _.take(searchResult, 3);

    return { clubs };
};
