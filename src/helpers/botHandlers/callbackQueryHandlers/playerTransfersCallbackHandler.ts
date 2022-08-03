import { fetchPlayerInfo } from 'db/helpers/players';
import { sendPlayerTranferHistoryMessages } from 'helpers/telegram/sendMessage';
import { playerDetailsParser } from 'helpers/parsers';
import type TelegramBot from 'node-telegram-bot-api';
import type { CallbackQuery } from 'node-telegram-bot-api';

const playerTransfersCallbackHandler = async (
    bot: TelegramBot,
    query: CallbackQuery,
    playerName: string
): Promise<void> => {
    const playerInfo = await fetchPlayerInfo(playerName);
    if (!playerInfo) return;

    bot.answerCallbackQuery(query.id, { text: playerName });

    const { transfersHistory } = await playerDetailsParser(playerInfo.playerLink);

    const chatId = query.from.id;

    await sendPlayerTranferHistoryMessages(bot, chatId, {
        transfersHistory,
        playerInfo
    });
};

export default playerTransfersCallbackHandler;
