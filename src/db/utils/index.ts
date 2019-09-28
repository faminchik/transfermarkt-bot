import _ from 'lodash';
import moment from 'moment';
import BPromise from 'bluebird';
import { TTransferFullEntity } from 'ts/types/Entities.types';
import User from 'models/User';
import Transfer from 'models/Transfer';
import { getBottomDate } from 'helpers/dateHelper';

export const getUsersIds = async () => {
    const users = await User.find({}).select(['chatId', '-_id']);
    const usersIds = _.map(users, 'chatId');
    return usersIds;
};

export const getRecentTransfers = async () => {
    const transfers = await Transfer.find({}).select(['-_id', '-__v']);

    const bottomDate = getBottomDate();
    const recentTransfers = _.filter(transfers, transferInfo => {
        const transferDate = moment(transferInfo.transferDate, 'MMM DD, YYYY');
        return transferDate >= bottomDate;
    });

    const sortedRecentTransfers = _.sortBy(recentTransfers, item =>
        moment(item.transferDate, 'MMM DD, YYYY')
    );

    return sortedRecentTransfers;
};

export const getTransfersToShow = async (transfers: TTransferFullEntity[]) =>
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

export const getUserCount = async () => await User.countDocuments();
