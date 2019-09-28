/* eslint @typescript-eslint/camelcase: 0 */

import { InlineKeyboardButton, SendMessageOptions } from 'node-telegram-bot-api';

export const formInlineKeyboard = (buttons: InlineKeyboardButton[] = []): SendMessageOptions => ({
    reply_markup: {
        inline_keyboard: [buttons]
    }
});
