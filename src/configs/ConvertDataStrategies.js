import * as pt from 'constants/transfermarkt/ParsingTypes';
import * as cdt from 'constants/transfermarkt/ConvertDataTypes';

export default {
    [pt.ALL_LATEST_TRANSFERS]: cdt.ALL_LATEST_TRANSFERS,
    [pt.SEARCH_CLUBS]: cdt.CLUBS_SEARCH,
    [pt.TEAM_TRANSFERS_ARRIVALS]: cdt.TEAM_TRANSFERS,
    [pt.TEAM_TRANSFERS_DEPARTURES]: cdt.TEAM_TRANSFERS
};
