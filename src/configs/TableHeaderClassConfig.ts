import pt from 'constants/transfermarkt/ParsingTypes';

// const TABLE_HEADER = '.table-header';
const CONTENT_BOX_HEADLINE = '.content-box-headline';

export default {
    [pt.ALL_LATEST_TRANSFERS]: CONTENT_BOX_HEADLINE,
    [pt.SEARCH_CLUBS]: CONTENT_BOX_HEADLINE,
    [pt.SEARCH_PLAYERS]: CONTENT_BOX_HEADLINE,
    [pt.TEAM_TRANSFERS_ARRIVALS]: CONTENT_BOX_HEADLINE,
    [pt.TEAM_TRANSFERS_DEPARTURES]: CONTENT_BOX_HEADLINE,
    [pt.PLAYER_TRANSFERS_HISTORY]: CONTENT_BOX_HEADLINE
};
