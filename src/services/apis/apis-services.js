import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosOnce = axios.create();
const axiosWithRetry = axios.create();
const axiosWithCredential = axios.create({
    withCredentials: true,
});
const axiosWithCredentialAndRetry = axios.create({
    withCredentials: true,
});

const checkRetry = (error) =>
    error &&
    error.response &&
    ((error.response.status > 401 && error.response.status <= 499) || error.response.status > 500);

axiosRetry(axiosWithRetry, {
    retries: 5,
    retryDelay: (retryCount) => retryCount * 1000,
    retryCondition: checkRetry,
});

axiosRetry(axiosWithCredentialAndRetry, {
    retries: 5,
    retryDelay: (retryCount) => retryCount * 1000,
    retryCondition: checkRetry,
});

const buildErrorResponse = (error) => {
    const response = { error: true, data: error.message, status: error.status };

    if (error.response) {
        response.status = error.response.status;
        response.data = error.response.data;
    }

    return response;
};

export const getClient = (retry, withCredentials) => {
    if (retry) {
        return withCredentials ? axiosWithCredentialAndRetry : axiosWithRetry;
    }
    return withCredentials ? axiosWithCredential : axiosOnce;
};

export const get = async (link, headers = {}, retry = true, withCredentials = false) => {
    try {
        return await getClient(retry, withCredentials).get(link, { headers: headers });
    } catch (error) {
        return buildErrorResponse(error);
    }
};

export const post = async (data, link, headers = {}, retry = true, withCredentials = false) => {
    try {
        return await getClient(retry, withCredentials).post(link, data, { headers: headers });
    } catch (error) {
        return buildErrorResponse(error);
    }
};

export const put = async (data, link, headers = {}, retry = true, withCredentials = false) => {
    try {
        return await getClient(retry, withCredentials).put(link, data, { headers: headers });
    } catch (error) {
        return buildErrorResponse(error);
    }
};

export const remove = async (link, retry = true, withCredentials = false) => {
    try {
        return await getClient(retry, withCredentials).delete(link);
    } catch (error) {
        return buildErrorResponse(error);
    }
};