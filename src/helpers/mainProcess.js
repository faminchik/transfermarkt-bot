import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import transfersProcess from './transfersProcess';
import { sendTransferMessage } from './telegramBotHelpers';
import { getUsers } from './jsonbin/usersCollection';
import { getDisplayedData, updateDisplayedData } from './jsonbin/displayedDataCollection';

export default async botClient => {
    const transfers = await transfersProcess();
    if (!transfers) return;

    const users = await getUsers();
    let displayedData = await getDisplayedData();

    const transfersToShow = _.filter(transfers, item => !_.find(displayedData, item));
    const ids = _.keys(users);

    await BPromise.each(_.reverse(_.cloneDeep(transfersToShow)), async transferInfo => {
        await BPromise.each(ids, async id => {
            await sendTransferMessage(botClient, id, transferInfo);
        });

        const { name, leftTeam, joinedTeam } = transferInfo;
        const index = _.findIndex(displayedData, { name, leftTeam, joinedTeam });

        index === -1 ? displayedData.push(transferInfo) : (displayedData[index] = transferInfo);
    });

    if (!_.isEmpty(transfersToShow)) {
        displayedData = _.sortBy(displayedData, item => moment(item.transferDate, 'MMM DD, YYYY'));
        await updateDisplayedData({ displayedData });
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
    console.log('users', _.cloneDeep(users));
};
