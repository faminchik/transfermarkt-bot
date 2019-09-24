import fetch from 'node-fetch';

export const fetchHtmlRequest = async (url: string) => {
    try {
        return await fetch(url, {
            method: 'GET'
        }).then(response => {
            const { ok } = response;
            const { status } = response;

            if (!ok) {
                console.log('GET Html Request status: ', status);
                return null;
            }
            return response.text();
        });
    } catch (e) {
        console.log('GET Html Request error', e);
        return null;
    }
};
