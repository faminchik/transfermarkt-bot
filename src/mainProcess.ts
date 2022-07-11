import _ from 'lodash';
import BPromise from 'bluebird';
import { allLatestTransfersParser } from 'helpers/parsers';
import { getUsersIds, getTransfersToShow } from 'db/utils';
import { upsertTransfers, deleteUsersByChatIds, isNewTransfer as isNewTransferFunc } from 'db/helpers';
import { sendTransferMessage } from 'helpers/telegram/sendMessage';
import Status from 'constants/Statuses';
import type TelegramBot from 'node-telegram-bot-api';

export default async (botClient: TelegramBot) => {
    const transfers = await allLatestTransfersParser();
    if (_.isEmpty(transfers)) return;

    const blockedIds: number[] = [];
    const transfersToShow = await getTransfersToShow(transfers);

    if (_.isEmpty(transfersToShow)) return;

    const usersIds = await getUsersIds();

    await BPromise.each(_.reverse(_.cloneDeep(transfersToShow)), async (transferInfo) => {
        const isNewTransfer = await isNewTransferFunc(transferInfo);

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
