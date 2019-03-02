import * as st from 'constants/transfermarkt/SearchTypes';
import * as cdt from 'constants/transfermarkt/ConvertDataTypes';
import * as ttt from 'constants/transfermarkt/TeamTransfersTypes';

export default {
    [st.SEARCH_CLUBS]: cdt.CLUBS_SEARCH,
    [ttt.TEAM_TRANSFERS_ARRIVALS]: cdt.TEAM_TRANSFERS,
    [ttt.TEAM_TRANSFERS_DEPARTURES]: cdt.TEAM_TRANSFERS
};
