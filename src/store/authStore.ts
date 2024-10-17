import {create} from 'zustand';
import * as Keychain from 'react-native-keychain';
import {AuthState} from '@constants/types';

const useAuthStore = create<AuthState>(set => ({
  accessToken: null,
  setTokens: async (accessToken: string) => {
    try {
      await Keychain.setGenericPassword('accessToken', accessToken);
      set({accessToken});
    } catch (error) {
      console.error('Error storing tokens: ', error);
    }
  },
  clearTokens: async () => {
    try {
      await Keychain.resetGenericPassword();
    } catch (error) {
      console.error('Error clearing tokens: ', error);
    }
  },
  loadTokens: async () => {
    try {
      const accessResult = await Keychain.getGenericPassword();
      if (accessResult) {
        set({accessToken: accessResult.password});
      }
    } catch (error) {
      console.log('Error loading tokens: ', error);
    }
  },
}));

export default useAuthStore;
