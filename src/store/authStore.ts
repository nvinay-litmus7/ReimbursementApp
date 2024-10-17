import {create} from 'zustand';
import * as Keychain from 'react-native-keychain';
import {AuthState} from '@constants/types';

const useAuthStore = create<AuthState>(set => ({
  // accessToken: null,
  accessToken:
    '691167a41d26bbf67e9ac1aa4c50b9201be8e781d26aa9f449e1f9a51daf71b1',
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
