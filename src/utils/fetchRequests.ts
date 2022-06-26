import axios from 'axios';

export const fetchHtmlRequest = async (url: string): Promise<string | null> => {
    try {
        const response = await axios.get<string>(url);

        const { status } = response;
        if (status !== 200) {
            console.info('GET Html Request status: ', status);
            return null;
        }

        return response.data;
    } catch (e) {
        console.error('GET Html Request error', e);
        return null;
    }
};
