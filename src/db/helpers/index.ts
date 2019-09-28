import _ from 'lodash';
import BPromise from 'bluebird';
import { Message } from 'node-telegram-bot-api';
import { TTransferFullEntity } from 'ts/types/Entities.types';
import User from 'models/User';
import Transfer from 'models/Transfer';

export const addUser = async (msg: Message) => {
    const { chat, from, date, text: command } = msg;

    const { id: chatId, type: chatType } = chat;
    const chatFirstName = _.get(chat, 'first_name', '');
    const chatLastName = _.get(chat, 'last_name', '');
    const chatUserName = _.get(chat, 'username', '');

    const fromId = _.get(from, 'id');
    const fromIsBot = _.get(from, 'is_bot');
    const fromFirstName = _.get(from, 'first_name', '');
    const fromLastName = _.get(from, 'last_name', '');
    const fromUserName = _.get(from, 'username', '');
    const fromLanguageCode = _.get(from, 'language_code', '');

    const user = await User.findOne({ chatId });
    if (user) return null;

    const newUser = new User({
        chatId,
        chatType,
        chatFirstName,
        chatLastName,
        chatUserName,
        fromId,
        fromIsBot,
        fromFirstName,
        fromLastName,
        fromUserName,
        fromLanguageCode,
        date,
        command
    });

    return newUser
        .save()
        .then(user => {
            console.log(
                'add',
                user.chatId,
                user.chatFirstName,
                user.chatLastName,
                user.chatUserName
            );
            return user.chatId;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
};

export const deleteUser = async (msg: Message) => {
    const {
        chat: { id: chatId }
    } = msg;

    const user = await User.findOne({ chatId });
    if (!user) return null;

    return user.remove().then(user => {
        console.log(
            'remove',
            user.chatId,
            user.chatFirstName,
            user.chatLastName,
            user.chatUserName
        );
        return user.chatId;
    });
};

export const deleteUsersByChatIds = (ids: number[]) => {
    _.each(ids, id => {
        User.findOne({ chatId: id }).then(user => {
            if (user) {
                user.remove();
            }
        });
    });
};

export const upsertTransfers = async (transfersToUpsert: TTransferFullEntity[]) => {
    await BPromise.each(transfersToUpsert, async transfer => {
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

        await Transfer.findOne({ name, leftTeam, joinedTeam }).then(transfer => {
            if (transfer) {
                transfer.set({
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
                });

                transfer
                    .save()
                    .then(transfer =>
                        console.log(
                            'updated',
                            transfer.name,
                            transfer.leftTeam,
                            transfer.joinedTeam,
                            transfer.fee
                        )
                    )
                    .catch(err => console.log(err));
            } else {
                const newTransfer = new Transfer({
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
                });

                newTransfer
                    .save()
                    .then(transfer =>
                        console.log(
                            transfer.name,
                            transfer.leftTeam,
                            transfer.joinedTeam,
                            transfer.fee
                        )
                    )
                    .catch(err => console.log(err));
            }
        });
    });
};

export const isNewTransfer = async (transferInfo: TTransferFullEntity) => {
    const { name, leftTeam, joinedTeam } = transferInfo;
    const transfer = await Transfer.findOne({ name, leftTeam, joinedTeam });
    return !transfer;
};
