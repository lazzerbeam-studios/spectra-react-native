import axios from 'axios';
import { AuthApi, Configuration } from '../openapi';

const config = new Configuration();
const axiosInstance = axios.create({
  headers: {
    Authorization: 'YOUR_TOKEN',
  },
});

const authApi = new AuthApi(config, 'http://localhost:8080', axiosInstance);

export { authApi };
