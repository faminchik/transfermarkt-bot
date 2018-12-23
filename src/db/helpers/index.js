import _ from 'lodash';
import User from '../../models/User';
import Transfer from '../../models/Transfer';

export const addUser = msg => {
    const { chat, from, date, text: command } = msg;

    const { id: chatId, type: chatType } = chat;
    const chatFirstName = _.get(chat, 'first_name', '');
    const chatLastName = _.get(chat, 'last_name', '');
    const chatUserName = _.get(chat, 'username', '');

    const { id: fromId, is_bot: fromIsBot } = from;
    const fromFirstName = _.get(from, 'first_name', '');
    const fromLastName = _.get(from, 'last_name', '');
    const fromUserName = _.get(from, 'username', '');
    const fromLanguageCode = _.get(from, 'language_code', '');

    User.findOne({ chatId }).then(user => {
        if (!user) {
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

            newUser
                .save()
                .then(user =>
                    console.log(
                        user.chatId,
                        user.chatFirstName,
                        user.chatLastName,
                        user.chatUserName
                    )
                )
                .catch(err => console.log(err));
        }
    });

    return chatId;
};

export const deleteUser = msg => {
    const {
        chat: { id: chatId }
    } = msg;

    User.findOne({ chatId }).then(user => {
        if (user) {
            user.remove();
        }
    });
};

export const deleteUsersByChatIds = ids => {
    _.each(ids, id => {
        User.findOne({ chatId: id }).then(user => {
            if (user) {
                user.remove();
            }
        });
    });
};

export const upsertTransfers = transfersToUpsert => {
    _.each(transfersToUpsert, transfer => {
        const { name, age, leftTeam, joinedTeam, transferDate, marketValue, fee } = transfer;

        Transfer.findOne({ name, leftTeam, joinedTeam }).then(transfer => {
            if (transfer) {
                transfer.set({ name, age, leftTeam, joinedTeam, transferDate, marketValue, fee });

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
                    leftTeam,
                    joinedTeam,
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

export const isNewTransfer = async transferInfo => {
    const { name, leftTeam, joinedTeam } = transferInfo;
    const transfer = await Transfer.findOne({ name, leftTeam, joinedTeam });
    return !transfer;
};
