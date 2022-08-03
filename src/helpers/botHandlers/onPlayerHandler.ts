import { upsertPlayers } from 'db/helpers/players';
import { sendPlayersSearchResultMessage } from 'helpers/telegram/sendMessage';
import { searchPlayersParser } from 'helpers/parsers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onPlayerHandler = async (bot: TelegramBot, msg: Message, match: RegExpExecArray | null): Promise<void> => {
    if (!match) return;

    const chatId = msg.chat.id;
    const query = match[1];
    if (!query) return;

    const { players } = await searchPlayersParser(query);

    await upsertPlayers(players);
    await sendPlayersSearchResultMessage(bot, chatId, players);
};

export default onPlayerHandler;
