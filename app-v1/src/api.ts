import axios from 'axios';

import { AuthApi, UsersApi, Configuration } from './openapi';

const config = new Configuration();
const axiosInstance = axios.create();
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const authApi = new AuthApi(config, apiUrl, axiosInstance);
const usersApi = new UsersApi(config, apiUrl, axiosInstance);

export { authApi, usersApi };
