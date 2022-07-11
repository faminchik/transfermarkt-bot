import { formClubsSearchResultMessage, formPlayersSearchResultMessage } from 'helpers/telegram/formMessageHelper';
import { formClubsSearchResultButtons, formPlayersSearchResultButtons } from 'helpers/telegram/formButtonsForKeyboard';
import { formInlineKeyboard } from 'helpers/telegram/formKeyboards';
import { sendMessage } from 'helpers/telegram/apiHelpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { SendMessageOptions, Chat, InlineKeyboardButton } from 'node-telegram-bot-api';
import type { TClubEntity, TPlayerEntity } from 'ts/EntitiesTS';

const sendSearchResultMessage = <T>(
    botClient: TelegramBot,
    chatId: Chat['id'],
    searchResult: T[],
    {
        messageFormer,
        keyboardButtonsFormer
    }: { messageFormer(items: T[]): string; keyboardButtonsFormer(items: T[]): InlineKeyboardButton[] }
) => {
    const message = messageFormer(searchResult);
    const keyboardButtons = keyboardButtonsFormer(searchResult);

    const options: SendMessageOptions = { ...formInlineKeyboard(keyboardButtons) };
    return sendMessage(botClient, chatId, message, options);
};

export const sendClubsSearchResultMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    searchClubsResult: TClubEntity[]
) => {
    return sendSearchResultMessage(botClient, chatId, searchClubsResult, {
        messageFormer: formClubsSearchResultMessage,
        keyboardButtonsFormer: formClubsSearchResultButtons
    });
};

export const sendPlayersSearchResultMessage = (
    botClient: TelegramBot,
    chatId: Chat['id'],
    searchPlayersResult: TPlayerEntity[]
) => {
    return sendSearchResultMessage(botClient, chatId, searchPlayersResult, {
        messageFormer: formPlayersSearchResultMessage,
        keyboardButtonsFormer: formPlayersSearchResultButtons
    });
};
