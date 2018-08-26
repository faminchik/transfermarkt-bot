import _ from 'lodash';
import moment from 'moment';
import transfersProcess from './transfersProcess';
import { getUsers } from './jsonbin/usersCollection';
import { getDisplayedData, updateDisplayedData } from './jsonbin/displayedDataCollection';

export default async botClient => {
    const transfers = await transfersProcess();
    if (!transfers) return;

    const users = await getUsers();
    let displayedData = await getDisplayedData();

    const transfersToShow = _.filter(transfers, item => !_.find(displayedData, item));
    const ids = _.keys(users);
    let shouldResortDisplayedData = false;

    _.forEach(_.reverse(_.cloneDeep(transfersToShow)), transferInfo => {
        _.forEach(ids, id => {
            sendTransferMessage(botClient, id, transferInfo);
        });

        const { name, leftTeam, joinedTeam } = transferInfo;
        const index = _.findIndex(displayedData, { name, leftTeam, joinedTeam });

        if (index === -1) {
            displayedData.push(transferInfo);
        } else {
            // if 'transferDate' was changed, I need to re-sort 'displayedData'
            if (displayedData[index].transferDate !== transferInfo.transferDate) {
                shouldResortDisplayedData = true;
            }
            displayedData[index] = transferInfo;
        }
    });

    if (shouldResortDisplayedData) {
        displayedData = _.sortBy(displayedData, item => moment(item.transferDate, 'MMM DD, YYYY'));
    }

    if (!_.isEmpty(transfersToShow)) {
        await updateDisplayedData({ displayedData });
    }

    console.log('transfersToShow', _.reverse(_.cloneDeep(transfersToShow)));
    console.log('users', _.cloneDeep(users));
};
