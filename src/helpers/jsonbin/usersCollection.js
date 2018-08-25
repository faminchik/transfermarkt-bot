require('dotenv').load();
import config from 'config';
import { fetchApiRequest, fetchBodyApiRequest } from '../../utils/fetchRequests';

const { JSONBIN_TOKEN } = process.env;
const URL = config.get('jsonbin-bins-core-url');
const USERS_BIN_ID = config.get('users-bin-id');

export const getUsers = async () => {
    const { users } = await fetchApiRequest(`${URL}/${USERS_BIN_ID}`, {
        'secret-key': JSONBIN_TOKEN
    });
    return users;
};

export const updateUsers = async data => {
    await fetchBodyApiRequest(
        `${URL}/${USERS_BIN_ID}`,
        {
            'Content-Type': 'application/json',
            'secret-key': JSONBIN_TOKEN,
            versioning: false
        },
        data,
        'PUT'
    );
};

export const updateAndGetUsers = async data => {
    await updateUsers(data);
    return await getUsers();
};
