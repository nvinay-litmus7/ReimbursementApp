import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import {
  AuthConfiguration,
  authorize,
  AuthorizeResult,
} from 'react-native-app-auth';
import {QueryClient} from '@tanstack/react-query';
import useAuthStore from '@store/authStore';
import {
  BASE_URL,
  MICROSOFT_CLIENT_ID,
  MICROSOFT_REDIRECT_URL,
  MICROSOFT_TENANT_ID,
} from '@env';
import {LoginResult} from '@constants/types';
import {navigate} from '@navigations/navigationRef';

// Create a new QueryClient
export const queryClient = new QueryClient();

// Microsoft login configuration
const config: AuthConfiguration = {
  issuer: 'https://login.microsoftonline.com/common',
  clientId: `${MICROSOFT_CLIENT_ID}`,
  redirectUrl: `${MICROSOFT_REDIRECT_URL}`, // replace with your redirect uri added in microsoft portal
  scopes: ['openid', 'profile', 'email', 'User.Read', 'offline_access'],
  serviceConfiguration: {
    authorizationEndpoint: `https://login.microsoftonline.com/${MICROSOFT_TENANT_ID}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${MICROSOFT_TENANT_ID}/oauth2/v2.0/token`,
  },
  useNonce: true,
  usePKCE: true, //For iOS, we have added the useNonce and usePKCE parameters, which are recommended for security reasons.
  additionalParameters: {
    prompt: 'consent',
  },
};

// Create an axios instance
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor to include the access token
api.interceptors.request.use(
  config => {
    const {accessToken} = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      await useAuthStore.getState().clearTokens();
      navigate('Login');
    }
    return Promise.reject(error);
  },
);

export const loginWithMicrosoft = async (): Promise<LoginResult> => {
  try {
    const result: AuthorizeResult = await authorize(config);
    const response: AxiosResponse = await api.post('/auth/microsoft', {
      token: result.idToken,
    });
    const {accessToken} = response.data.payload[0];
    await useAuthStore.getState().setTokens(accessToken);
    return {success: true, data: response.data};
  } catch (error) {
    console.error('Microsoft login failed:', error);
    return {success: false, error: (error as Error).message};
  }
};

export const get = async <T>(url: string, params?: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, {params});
    return response.data;
  } catch (error) {
    console.error(`GET request to ${url} failed:`, error);
    throw error;
  }
};

export const post = async <T>(url: string, data?: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`POST request to ${url} failed:`, error);
    throw error;
  }
};

export const put = async <T>(url: string, data?: any): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error(`PUT request to ${url} failed:`, error);
    throw error;
  }
};

// Add more methods for DELETE, etc. as needed

export default api;
