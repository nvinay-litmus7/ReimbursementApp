import axios, {AxiosInstance, AxiosResponse} from 'axios';
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
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

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

// Function to set the auth token from the store
const setAuthTokenFromStore = () => {
  const {accessToken} = useAuthStore.getState();
  if (accessToken) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete api.defaults.headers.common.Authorization;
  }
};

export const getRequest = async <T>(url: string, params?: any): Promise<T> => {
  setAuthTokenFromStore();
  const response: AxiosResponse<T> = await api.get(url, {params});
  return response.data;
};

export const postRequest = async <T>(url: string, data?: any): Promise<T> => {
  setAuthTokenFromStore();
  const response: AxiosResponse<T> = await api.post(url, data);
  return response.data;
};

export const putRequest = async <T>(url: string, data?: any): Promise<T> => {
  setAuthTokenFromStore();
  const response: AxiosResponse<T> = await api.put(url, data);
  return response.data;
};

// Add more methods for DELETE, etc. as needed

export default api;
