import _ from 'lodash';
import searchProcess from 'helpers/search/searchProcess';
import { SEARCH_CLUBS } from 'constants/transfermarkt/ParsingTypes';

export default async query => {
    const types = [SEARCH_CLUBS];
    const searchResult = await searchProcess(query, types);

    const clubs = _.take(searchResult[SEARCH_CLUBS], 3);

    return { clubs };
};
