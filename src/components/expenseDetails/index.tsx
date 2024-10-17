import InfoField from '@components/infoField';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
// import InfoField from './InfoField';

const ExpenseDetails: React.FC = () => {
  const expenseInfoData = [
    {label: 'Expense Type', value: 'Accommodation'},
    {
      label: 'Bill Date & Time',
      value: '10 Oct 2024; 4:40 PM',
      iconSource: {
        uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bfe734073eb4900ba27a2836c73d403f937b0d7d0c30fddc3d94ad93df260fbc?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
      },
    },
    {label: 'Bill Number', value: 'CHK 19107'},
    {label: 'Bill Amount', value: '$ 21.94'},
  ];

  return (
    <View style={styles.container}>
      {expenseInfoData.map((item, index) => (
        <InfoField
          key={index}
          label={item.label}
          value={item.value}
          iconSource={item.iconSource}
        />
      ))}
      <View style={styles.attachmentContainer}>
        <Text style={styles.label}>Attachment</Text>
        <View style={styles.attachmentContent}>
          <View style={styles.iconContainer}>
            <Image
              resizeMode="contain"
              source={{
                uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/23088b8a53162471c4fab890c61762591f3cc8e22f2bd122dd9aebf2c432d0f7?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
              }}
              style={styles.attachmentIcon}
            />
          </View>
          <Text style={styles.attachmentText}>IMG 20240923113918.jpg</Text>
        </View>
      </View>
      <View style={styles.remarksContainer}>
        <Text style={styles.label}>Employee Remarks</Text>
        <Text style={styles.remarksText}>Due to late night work</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  attachmentContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#4F4F4F',
    fontWeight: '600',
    marginBottom: 4,
  },
  attachmentContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  iconContainer: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  attachmentIcon: {
    width: 12,
    aspectRatio: 0.75,
  },
  attachmentText: {
    color: '#4F4F4F',
    fontFamily: 'Aptos, sans-serif',
    fontSize: 14,
    fontWeight: '600',
  },
  remarksContainer: {
    minHeight: 98,
  },
  remarksText: {
    borderRadius: 4,
    borderColor: 'rgba(229, 229, 229, 1)',
    borderWidth: 1,
    marginTop: 4,
    padding: 12,
    fontSize: 14,
    color: 'rgba(79, 79, 79, 1)',
    fontWeight: '400',
  },
});

export default ExpenseDetails;
