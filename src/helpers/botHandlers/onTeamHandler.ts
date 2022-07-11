import { upsertClubs } from 'db/helpers/clubs';
import { sendClubsSearchResultMessage } from 'helpers/telegram/sendMessage';
import { searchClubsParser } from 'helpers/parsers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Message } from 'node-telegram-bot-api';

const onTeamHandler = async (bot: TelegramBot, msg: Message, match: RegExpExecArray | null): Promise<void> => {
    if (!match) return;

    const chatId = msg.chat.id;
    const query = match[1];
    if (!query) return;

    const { clubs } = await searchClubsParser(query);

    await upsertClubs(clubs);
    await sendClubsSearchResultMessage(bot, chatId, clubs);
};

export default onTeamHandler;
