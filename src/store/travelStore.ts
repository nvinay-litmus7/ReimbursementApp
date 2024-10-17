import {create} from 'zustand';
import {TravelState} from '@constants/types';

export const useStore = create<TravelState>(set => ({
  travelData: [],
  setTravelData: data => set({travelData: data}),
}));
