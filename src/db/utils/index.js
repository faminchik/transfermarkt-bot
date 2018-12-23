import _ from 'lodash';
import moment from 'moment';
import BPromise from 'bluebird';
import User from '../../models/User';
import Transfer from '../../models/Transfer';

export const getUsersIds = async () => {
    const users = await User.find({}).select(['chatId', '-_id']);
    const usersIds = _.map(users, user => user.chatId);
    return usersIds;
};

export const getAllTransfers = async () => {
    const transfers = await Transfer.find({}).select(['-_id', '-__v']);
    const sortedTransfers = _.sortBy(transfers, item => moment(item.transferDate, 'MMM DD, YYYY'));

    return sortedTransfers;
};

export const getTransfersToShow = async transfers =>
    await BPromise.filter(transfers, async transfer => {
        const { name, leftTeam, joinedTeam, transferDate, fee } = transfer;
        const transferToShow = await Transfer.findOne({
            name,
            leftTeam,
            joinedTeam,
            transferDate,
            fee
        });
        return !transferToShow;
    });
