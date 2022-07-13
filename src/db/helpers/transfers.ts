import _ from 'lodash';
import BPromise from 'bluebird';
import moment from 'moment';
import { getLowerDate } from 'helpers/dateHelper';
import Transfer from 'models/Transfer';
import type { TTransferModel } from 'ts/ModelsTS';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

export const upsertTransfers = async (transfersToUpsert: TTransferFullEntity[]): Promise<(TTransferModel | null)[]> => {
    return BPromise.mapSeries(transfersToUpsert, async (transfer) => {
        const {
            name = '',
            age = '',
            nationality = '',
            leftTeam = '',
            joinedTeam = '',
            leftTeamCountry,
            joinedTeamCountry,
            transferDate = '',
            marketValue = '',
            fee = ''
        } = transfer;

        try {
            const transfer = await Transfer.findOneAndUpdate(
                { name, leftTeam, joinedTeam },
                {
                    name,
                    age,
                    nationality,
                    leftTeam,
                    joinedTeam,
                    leftTeamCountry,
                    joinedTeamCountry,
                    transferDate,
                    marketValue,
                    fee
                },
                { new: true, upsert: true }
            );

            console.info(transfer.name, transfer.leftTeam, transfer.joinedTeam, transfer.fee);
            return transfer;
        } catch (err) {
            console.error(err);
            return null;
        }
    });
};

export const fetchIsNewTransfer = async (transferInfo: TTransferFullEntity): Promise<boolean> => {
    const { name, leftTeam, joinedTeam } = transferInfo;
    const transfer = await Transfer.findOne({ name, leftTeam, joinedTeam });
    return !transfer;
};

export const fetchTransfersToShow = async (transfers: TTransferFullEntity[]): Promise<TTransferFullEntity[]> => {
    return BPromise.filter(transfers, async (transfer) => {
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
};

export const fetchRecentTransfers = async (): Promise<TTransferModel[]> => {
    const transfers = await Transfer.find().select(['-_id', '-__v']);

    const lowerDate = getLowerDate();
    const recentTransfers = _.filter(transfers, (transferInfo) => {
        const transferDate = moment(transferInfo.transferDate, 'MMM DD, YYYY');
        return transferDate >= lowerDate;
    });

    return _.sortBy(recentTransfers, (item) => moment(item.transferDate, 'MMM DD, YYYY'));
};
