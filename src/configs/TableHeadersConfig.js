import * as tb from 'constants/transfermarkt/TableHeaders';
import * as st from 'constants/transfermarkt/SearchTypes';
import * as ttt from 'constants/transfermarkt/TeamTransfersTypes';

export default {
    [st.SEARCH_CLUBS]: tb.SEARCH_RESULTS_HEADER_CLUBS,
    [ttt.TEAM_TRANSFERS_ARRIVALS]: tb.TEAM_TRANSFERS_HEADER_ARRIVALS,
    [ttt.TEAM_TRANSFERS_DEPARTURES]: tb.TEAM_TRANSFERS_HEADER_DEPARTURES
};
