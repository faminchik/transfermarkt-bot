import _ from 'lodash';
import BPromise from 'bluebird';
import allLatestTransfersProcess from 'helpers/allLatestTransfers';
import { getUsersIds, getTransfersToShow } from 'db/utils';
import {
    upsertTransfers,
    deleteUsersByChatIds,
    isNewTransfer as isNewTransferFunc
} from 'db/helpers';
import { sendTransferMessage } from 'helpers/telegram/telegramBotHelpers';
import { BLOCKED } from 'constants/statuses';

export default async botClient => {
    const transfers = await allLatestTransfersProcess();
    if (_.isEmpty(transfers)) return;

    const blockedIds = [];
    const transfersToShow = await getTransfersToShow(transfers);

    if (_.isEmpty(transfersToShow)) return;

    const usersIds = await getUsersIds();

    await BPromise.each(_.reverse(_.cloneDeep(transfersToShow)), async transferInfo => {
        const isNewTransfer = await isNewTransferFunc(transferInfo);

        await BPromise.each(usersIds, async id => {
            const status = await sendTransferMessage(botClient, id, transferInfo, isNewTransfer);

            if (status === BLOCKED) blockedIds.push(id);
        });
    });

    console.log('blockedIds', blockedIds);

    if (!_.isEmpty(transfersToShow)) {
        await upsertTransfers(transfersToShow);
    }

    if (!_.isEmpty(blockedIds)) {
        deleteUsersByChatIds(blockedIds);
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
};
