import _ from 'lodash';
import cqt from 'constants/CallbackQueryTypes';
import { CALLBACK_DATA_MAX_SYMBOLS_NUMBER } from 'constants/Telegram';
import type { InlineKeyboardButton } from 'node-telegram-bot-api';
import type { TClubEntity, TPlayerEntity } from 'ts/EntitiesTS';

const filterCallbackDataLimitation = (buttons: InlineKeyboardButton[]): InlineKeyboardButton[] =>
    _.filter(buttons, ({ callback_data }) => _.size(callback_data) <= CALLBACK_DATA_MAX_SYMBOLS_NUMBER);

const formSearchResultButtons = (callbackQueryTypes: cqt, data: string[]): InlineKeyboardButton[] => {
    const buttons = data.map<InlineKeyboardButton>((item, index) => ({
        text: `${index + 1}`,
        callback_data: `${callbackQueryTypes} ${item}` // only 64 symbols
    }));

    return filterCallbackDataLimitation(buttons);
};

export const formClubsSearchResultButtons = (searchClubsResult: TClubEntity[]): InlineKeyboardButton[] => {
    const data = searchClubsResult.map(({ clubName }) => clubName);

    return formSearchResultButtons(cqt.CLUB, data);
};

export const formPlayersSearchResultButtons = (searchPlayersResult: TPlayerEntity[]): InlineKeyboardButton[] => {
    const data = searchPlayersResult.map(({ name }) => name);

    return formSearchResultButtons(cqt.PLAYER, data);
};
