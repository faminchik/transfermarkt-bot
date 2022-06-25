import _ from 'lodash';
import searchProcess from 'helpers/search/searchProcess';
import { TClubEntity } from 'ts/types/Entities.types';

export default async (query: string): Promise<{ clubs: TClubEntity[] }> => {
    const searchResult = await searchProcess(query);

    const clubs = _.take(searchResult, 3);

    return { clubs };
};
