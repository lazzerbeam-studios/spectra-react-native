import { AuthApi, Configuration } from '../openapi';
import axios from 'axios';

const config = new Configuration();
const axiosInstance = axios.create({
  headers: { Authorization: 'YOUR_TOKEN' },
});

const authApi = new AuthApi(config, 'http://localhost:8080', axiosInstance);

export { authApi };
