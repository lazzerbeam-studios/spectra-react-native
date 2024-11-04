import axios from 'axios';

import { AuthApi, UsersApi, Configuration } from './openapi';

const config = new Configuration();
const axiosInstance = axios.create();
const url = process.env.EXPO_PUBLIC_API_URL;

const authApi = new AuthApi(config, url, axiosInstance);
const usersApi = new UsersApi(config, url, axiosInstance);

export { authApi, usersApi };
