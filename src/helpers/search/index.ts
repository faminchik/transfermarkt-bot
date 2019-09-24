import _ from 'lodash';
import searchProcess from 'helpers/search/searchProcess';
import pt from 'constants/transfermarkt/ParsingTypes';

export default async (query: string) => {
    const types = [pt.SEARCH_CLUBS];
    const searchResult = await searchProcess(query, types);

    const clubs = _.take(searchResult[pt.SEARCH_CLUBS], 3);

    return { clubs };
};
