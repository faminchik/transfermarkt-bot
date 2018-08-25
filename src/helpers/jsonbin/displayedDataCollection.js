require('dotenv').load();
import config from 'config';
import { fetchApiRequest, fetchBodyApiRequest } from '../../utils/fetchRequests';

const { JSONBIN_TOKEN } = process.env;
const URL = config.get('jsonbin-bins-core-url');
const DISPLAYED_DATA_BIN_ID = config.get('displayed-data-bin-id');

export const getDisplayedData = async () => {
    const { displayedData } = await fetchApiRequest(`${URL}/${DISPLAYED_DATA_BIN_ID}`, {
        'secret-key': JSONBIN_TOKEN
    });
    return displayedData;
};

export const updateDisplayedData = async data => {
    await fetchBodyApiRequest(
        `${URL}/${DISPLAYED_DATA_BIN_ID}`,
        {
            'Content-Type': 'application/json',
            'secret-key': JSONBIN_TOKEN,
            versioning: false
        },
        data,
        'PUT'
    );
};

export const updateAndDisplayedData = async data => {
    await updateDisplayedData(data);
    return await getDisplayedData();
};
