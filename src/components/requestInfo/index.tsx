import InfoField from '@components/infoField';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import InfoField from './InfoField';

const RequestInfo: React.FC = () => {
  const requestInfoData = [
    {label: 'Category', value: 'Travel'},
    {label: 'Client', value: 'Litmus7 USA'},
    {label: 'Currency', value: 'USD - United States Dollar'},
  ];

  return (
    <View style={styles.container}>
      {requestInfoData.map((item, index) => (
        <InfoField key={index} label={item.label} value={item.value} />
      ))}
      <View style={styles.dateContainer}>
        <InfoField
          label="Start Date"
          value="5 Sep 2024"
          iconSource={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfe734073eb4900ba27a2836c73d403f937b0d7d0c30fddc3d94ad93df260fbc?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
          }}
        />
        <InfoField
          label="End Date"
          value="8 Sep 2024"
          iconSource={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f12d5efd37a91ec3ae5cfa7ed2ae21afb660276ba97299fcade0a44623a9f821?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
          }}
        />
      </View>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e77d1bd28bbe798d9756b8d18ca73edbd5846f0278a312a2f331069d97c6b2af?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
        }}
        style={styles.divider}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  divider: {
    width: '100%',
    marginTop: 12,
  },
});

export default RequestInfo;
