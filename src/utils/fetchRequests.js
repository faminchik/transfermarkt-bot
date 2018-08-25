import buildUrl from 'build-url';
import fetch from 'node-fetch';

export const fetchApiRequest = async (url, headers, path, queryParams, method = 'GET') => {
    const finalUrl = buildUrl(url, {
        path,
        queryParams
    });

    try {
        return await fetch(finalUrl, {
            headers,
            method
        }).then(response => {
            const { ok } = response;
            const { status } = response;

            if (!ok) {
                console.log('Api Request status: ', status);
                return null;
            }
            return response.json();
        });
    } catch (e) {
        console.log('Api Request error', e);
        return null;
    }
};

export const fetchBodyApiRequest = async (url, headers, body, method = 'POST') => {
    try {
        return await fetch(url, {
            headers,
            method,
            body: JSON.stringify(body)
        }).then(response => {
            const { ok } = response;
            const { status } = response;

            if (!ok) {
                console.log('Api Body Request status: ', status);
                return null;
            }
            return response.json();
        });
    } catch (e) {
        console.log('Api Body Request error', e);
        return null;
    }
};

export const fetchHtmlRequest = async url => {
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

export const fetchBodyHtmlRequest = async (url, headers, body, method = 'POST') => {
    try {
        return await fetch(url, {
            headers,
            method,
            body: JSON.stringify(body)
        }).then(response => {
            const { ok } = response;
            const { status } = response;

            if (!ok) {
                console.log('POST Html Request status: ', status);
                return null;
            }
            return response.text();
        });
    } catch (e) {
        console.log('POST Html Request error', e);
        return null;
    }
};
