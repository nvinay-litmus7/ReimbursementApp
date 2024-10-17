import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '@components/header';
import SearchBar from '@components/searchBar';
import TravelCard from '@components/travelCard';
import {TravelItem} from '@constants/types';
import {getTravelList} from '@service/travelApi';
import styles from './styles';

const payload = [
  {
    id: 377,
    code: '20241016000377',
    requestDate: '2024 Oct 16',
    typeOfTravel: {
      id: 2,
      name: 'Round Trip ( Int )',
    },
    reasonForTravel: {
      id: 1,
      name: 'Business',
    },
    bookingFor: {
      id: 1,
      name: 'Self',
    },
    requestStatus: {
      id: 2,
      name: 'Pending',
    },
  },
];

const TravelScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [travelData, setTravelData] = useState<TravelItem[]>(payload);

  useEffect(() => {
    const fetchTravelData = async () => {
      try {
        const data: any = await getTravelList();
        console.log('Response data: ', data);
        setTravelData(data?.payload);
      } catch (error) {
        // Handle error (e.g., show error message to user)
        console.error('Error fetching travel data:', error);
      }
    };

    fetchTravelData();
  }, []);

  const renderItem = ({item}: {item: TravelItem}) => (
    <TravelCard
      id={item.code}
      type={item.typeOfTravel.name}
      projectType={item.reasonForTravel.name}
      travellerType={item.bookingFor.name}
      status={item.requestStatus.name}
      date={item.requestDate}
    />
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header title="Active Travels" />
      <SearchBar />
      <FlatList
        data={travelData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default TravelScreen;
