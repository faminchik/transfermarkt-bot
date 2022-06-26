import type { InlineKeyboardButton, SendMessageOptions } from 'node-telegram-bot-api';

export const formInlineKeyboard = (buttons: InlineKeyboardButton[] = []): SendMessageOptions => ({
    reply_markup: {
        inline_keyboard: [buttons]
    }
});
