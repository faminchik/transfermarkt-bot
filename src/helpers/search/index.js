import _ from 'lodash';
import searchProcess from 'helpers/search/searchProcess';
import * as st from 'constants/transfermarkt/SearchTypes';

export default async query => {
    const types = [st.SEARCH_CLUBS];
    const searchResult = await searchProcess(query, types);

    const clubs = _.take(searchResult[st.SEARCH_CLUBS], 3);

    return { clubs };
};
