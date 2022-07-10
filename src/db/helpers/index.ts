import _ from 'lodash';
import BPromise from 'bluebird';
import User from 'models/User';
import Transfer from 'models/Transfer';
import type { Message } from 'node-telegram-bot-api';
import type { TTransferFullEntity } from 'ts/EntitiesTS';

export const addUser = async (msg: Message) => {
    const { chat, from, date, text: command } = msg;

    const { id: chatId, type: chatType } = chat;
    const chatFirstName = chat.first_name ?? '';
    const chatLastName = chat.last_name ?? '';
    const chatUserName = chat.username ?? '';

    const fromId = from?.id ?? '';
    const fromIsBot = from?.is_bot ?? '';
    const fromFirstName = from?.first_name ?? '';
    const fromLastName = from?.last_name ?? '';
    const fromUserName = from?.username ?? '';
    const fromLanguageCode = from?.language_code ?? '';

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
            console.info('add', user.chatId, user.chatFirstName, user.chatLastName, user.chatUserName);
            return user.chatId;
        })
        .catch(err => {
            console.error(err);
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
        console.info('remove', user.chatId, user.chatFirstName, user.chatLastName, user.chatUserName);
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
            fee = '',
            position = ''
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
                    fee,
                    position
                });

                transfer
                    .save()
                    .then(transfer =>
                        console.info('updated', transfer.name, transfer.leftTeam, transfer.joinedTeam, transfer.fee)
                    )
                    .catch(err => console.error(err));
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
                    fee,
                    position
                });

                newTransfer
                    .save()
                    .then(transfer => console.info(transfer.name, transfer.leftTeam, transfer.joinedTeam, transfer.fee))
                    .catch(err => console.error(err));
            }
        });
    });
};

export const isNewTransfer = async (transferInfo: TTransferFullEntity) => {
    const { name, leftTeam, joinedTeam } = transferInfo;
    const transfer = await Transfer.findOne({ name, leftTeam, joinedTeam });
    return !transfer;
};
