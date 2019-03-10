import _ from 'lodash';
import { CLUB } from 'constants/CallbackQueryTypes';
import { CALLBACK_DATA_MAX_SYMBOLS_NUMBER } from 'constants/telegram';

const filterCallbackDataLimitation = buttons =>
    _.filter(
        buttons,
        ({ callback_data }) => _.size(callback_data) <= CALLBACK_DATA_MAX_SYMBOLS_NUMBER
    );

export const formClubsSearchResultButtons = searchResult => {
    const buttons = _.map(searchResult, ({ clubName }, index) => ({
        text: `${index + 1}`,
        callback_data: `${CLUB} ${clubName}` // only 64 symbols
    }));

    return filterCallbackDataLimitation(buttons);
};
