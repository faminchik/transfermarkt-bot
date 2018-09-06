import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import transfersProcess from './transfersProcess';
import { sendTransferMessage } from './telegramBotHelpers';
import { getUsers } from './jsonbin/usersCollection';
import { getDisplayedData, updateDisplayedData } from './jsonbin/displayedDataCollection';
import { BLOCKED } from '../constants/statuses';

export default async botClient => {
    const transfers = await transfersProcess();
    if (!transfers) return;

    const users = await getUsers();
    let displayedData = await getDisplayedData();
    const blockedIds = [];

    const transfersToShow = _.filter(transfers, item => !_.find(displayedData, item));
    const ids = _.keys(users);

    await BPromise.each(_.reverse(_.cloneDeep(transfersToShow)), async transferInfo => {
        const { name, leftTeam, joinedTeam } = transferInfo;
        const index = _.findIndex(displayedData, { name, leftTeam, joinedTeam });

        const isNewTransfer = index === -1;
        isNewTransfer ? displayedData.push(transferInfo) : (displayedData[index] = transferInfo);

        await BPromise.each(ids, async id => {
            const status = await sendTransferMessage(botClient, id, transferInfo, isNewTransfer);

            if (status === BLOCKED) blockedIds.push(id);
        });
    });

    console.log('blockedIds', blockedIds);

    if (!_.isEmpty(transfersToShow)) {
        displayedData = _.sortBy(displayedData, item => moment(item.transferDate, 'MMM DD, YYYY'));
        await updateDisplayedData({ displayedData });
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
    console.log('users', _.cloneDeep(users));
};
