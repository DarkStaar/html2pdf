import axios from 'axios';

import { useAPIHandler } from '/actions/index';

import useSWR from 'swr';

import { fetcher } from "./index";

const logUserIn = data => axios.post('/api/v1/login', data);

const logUserOut = () => axios.get('/api/v1/logout');

const registerUser = data => axios.post('/api/v1/register', data);

const generateApiKey = () => axios.get('api/v1/generate');

export const useLogUserIn = () => useAPIHandler(logUserIn);
export const useLogUserOut = () => useAPIHandler(logUserOut);
export const useRegisterUser = () => useAPIHandler(registerUser);
export const useGenerateKey = () => useAPIHandler(generateApiKey);