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

export type TravelState = {
  travelData: any[];
  setTravelData: (data: any[]) => void;
};

export type HeaderProps = {
  title: string;
  onNotificationPress?: () => void;
};

export type SearchBarProps = {
  onSearchChange?: (text: string) => void;
  onMicPress?: () => void;
  onFilterPress?: () => void;
};

export type TravelItem = {
  id: string;
  code: string;
  typeOfTravel: {name: string};
  reasonForTravel: {name: string};
  bookingFor: {name: string};
  requestStatus: {name: string};
  requestDate: string;
};
