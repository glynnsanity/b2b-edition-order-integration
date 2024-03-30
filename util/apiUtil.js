import fetch from 'node-fetch';
import { STORE_HASH, ACCESS_TOKEN, CLIENT_ID } from './config.js';

export const makeApiCall = (url, method = 'GET') => {
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'X-Auth-Token': ACCESS_TOKEN,
            'X-Auth-Client': CLIENT_ID,
            'Content-Type': 'application/json',
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error(`API call failed with status: ${response.status}`);
        }
        return response.json();
    });
};
