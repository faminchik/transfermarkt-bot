import _ from 'lodash';
import BPromise from 'bluebird';
import { allLatestTransfersParser } from 'helpers/parsers';
import { fetchUsersIds, deleteUsersByChatIds } from 'db/helpers/users';
import { fetchTransfersToShow, upsertTransfers, fetchIsNewTransfer } from 'db/helpers/transfers';
import { sendTransferMessage } from 'helpers/telegram/sendMessage';
import Status from 'constants/Statuses';
import type TelegramBot from 'node-telegram-bot-api';

export default async (botClient: TelegramBot) => {
    const transfers = await allLatestTransfersParser();
    if (_.isEmpty(transfers)) return;

    const blockedIds: number[] = [];
    const transfersToShow = await fetchTransfersToShow(transfers);

    if (_.isEmpty(transfersToShow)) return;

    const usersIds = await fetchUsersIds();

    await BPromise.each(_.reverse(_.cloneDeep(transfersToShow)), async (transferInfo) => {
        const isNewTransfer = await fetchIsNewTransfer(transferInfo);

        await BPromise.each(usersIds, async (id) => {
            const { status } = await sendTransferMessage(botClient, id, transferInfo, isNewTransfer);

            if (status === Status.BLOCKED) blockedIds.push(id);
        });
    });

    console.log('blockedIds', _.uniq(blockedIds));

    if (!_.isEmpty(transfersToShow)) {
        await upsertTransfers(transfersToShow);
    }

    if (!_.isEmpty(blockedIds)) {
        deleteUsersByChatIds(_.uniq(blockedIds));
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
};
