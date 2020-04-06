import axios from 'axios';

export const get = async (url) => axios.get(url);

export const post = async (url, params) => axios.post(url, params);

export const put = async (url, params) => axios.put(url, params);

export const remove = async (url, params) => axios.delete(url, params);
