/* eslint @typescript-eslint/camelcase: 0 */

export const formInlineKeyboard = (buttons = []) => ({
    reply_markup: JSON.stringify({
        inline_keyboard: [buttons]
    })
});
