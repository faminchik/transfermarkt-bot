import _ from 'lodash';
import { formTeamTransferMessage, formTeamTransfersHeader } from 'helpers/telegram/formMessageHelper';
import { sendJoinedMessages } from 'helpers/telegram/sendMessage/helpers';
import type TelegramBot from 'node-telegram-bot-api';
import type { Chat } from 'node-telegram-bot-api';
import type { TClubEntity, TTeamTransferEntity } from 'ts/EntitiesTS';
import type { TClubModel } from 'ts/ModelsTS';

export const sendTeamTransfersMessages = async (
    botClient: TelegramBot,
    chatId: Chat['id'],
    {
        teamTransfersArrivals,
        teamTransfersDepartures,
        clubInfo
    }: {
        teamTransfersArrivals: TTeamTransferEntity[];
        teamTransfersDepartures: TTeamTransferEntity[];
        clubInfo: TClubEntity | TClubModel;
    }
) => {
    const arrivalsMessages = _.map(teamTransfersArrivals, (info, index) =>
        formTeamTransferMessage(info, '←', index + 1)
    );
    const arrivalsHeader = formTeamTransfersHeader(clubInfo, 'Arrivals');

    const departuresMessages = _.map(teamTransfersDepartures, (info, index) =>
        formTeamTransferMessage(info, '→', index + 1)
    );
    const departuresHeader = formTeamTransfersHeader(clubInfo, 'Departures');

    const arrivalMessagesResult = await sendJoinedMessages(botClient, chatId, arrivalsMessages, arrivalsHeader);
    const departureMessagesResult = await sendJoinedMessages(botClient, chatId, departuresMessages, departuresHeader);

    return _.concat(arrivalMessagesResult, departureMessagesResult);
};
