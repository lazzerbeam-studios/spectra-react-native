import { AuthApi, Configuration } from '../openapi';
import axios from 'axios';

const config = new Configuration();
const axiosInstance = axios.create({
  headers: { Authorization: 'YOUR_TOKEN' },
});

const authApi = new AuthApi(config, 'example.com', axiosInstance);

export { authApi };
