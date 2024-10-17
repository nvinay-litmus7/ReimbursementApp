export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Travel: undefined;
  Reimbursement: undefined;
};

export type AuthState = {
  accessToken: string | null;
  setTokens: (acccessToken: string) => Promise<void>;
  clearTokens: () => Promise<void>;
  loadTokens: () => Promise<void>;
};

export type LoginResult = {
  success: boolean;
  data?: any;
  error?: string;
};
