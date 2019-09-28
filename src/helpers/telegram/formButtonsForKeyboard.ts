import _ from 'lodash';
import { InlineKeyboardButton } from 'node-telegram-bot-api';
import { TClubEntity } from 'ts/types/Entities.types';
import cqt from 'constants/CallbackQueryTypes';
import { CALLBACK_DATA_MAX_SYMBOLS_NUMBER } from 'constants/Telegram';

/* eslint @typescript-eslint/camelcase: 0 */

const filterCallbackDataLimitation = (buttons: InlineKeyboardButton[]) =>
    _.filter(
        buttons,
        ({ callback_data }) => _.size(callback_data) <= CALLBACK_DATA_MAX_SYMBOLS_NUMBER
    );

export const formClubsSearchResultButtons = (searchResult: TClubEntity[]) => {
    const buttons: InlineKeyboardButton[] = _.map(searchResult, ({ clubName }, index) => ({
        text: `${index + 1}`,
        callback_data: `${cqt.CLUB} ${clubName}` // only 64 symbols
    }));

    return filterCallbackDataLimitation(buttons);
};
