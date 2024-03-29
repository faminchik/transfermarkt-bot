import pt from 'constants/transfermarkt/ParsingTypes';
import cdt from 'constants/transfermarkt/ConvertDataTypes';

export default {
    [pt.ALL_LATEST_TRANSFERS]: cdt.ALL_LATEST_TRANSFERS,
    [pt.SEARCH_CLUBS]: cdt.CLUBS_SEARCH,
    [pt.SEARCH_PLAYERS]: cdt.PLAYERS_SEARCH,
    [pt.TEAM_TRANSFERS_ARRIVALS]: cdt.TEAM_TRANSFERS,
    [pt.TEAM_TRANSFERS_DEPARTURES]: cdt.TEAM_TRANSFERS,
    [pt.PLAYER_TRANSFERS_HISTORY]: cdt.PLAYER_TRANSFERS_HISTORY
};
