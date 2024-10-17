import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RequestSummary: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.summaryContent}>
        <View style={styles.leftContent}>
          <Image
            resizeMode="contain"
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6900d8ff0d68ca6a66d8a32d426766dcc8b5d8add95138031f6ac1f78b5430f7?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
            }}
            style={styles.icon}
          />
          <View style={styles.textContent}>
            <Text style={styles.requestId}>RM-RQ-2021-2538</Text>
            <Text style={styles.accommodationType}>Accommodation</Text>
            <Text style={styles.amount}>$300</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>Submitted</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>29 Aug 24</Text>
          </View>
        </View>
      </View>
      <View style={styles.timelineButton}>
        <Text style={styles.timelineText}>View Timeline</Text>
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
    width: '100%',
    marginTop: 12,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  textContent: {
    gap: 4,
  },
  requestId: {
    color: '#858585',
    fontSize: 12,
    fontWeight: '400',
  },
  accommodationType: {
    color: '#1C1C1C',
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    color: '#32BCAD',
    fontSize: 14,
    fontWeight: '600',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  statusContainer: {
    backgroundColor: 'rgba(255, 148, 17, 0.1)',
    borderRadius: 4,
    paddingVertical: 1,
    paddingHorizontal: 4,
  },
  statusText: {
    color: 'rgba(255, 148, 17, 1)',
    fontSize: 12,
    fontWeight: '600',
  },
  dateContainer: {
    marginTop: 4,
  },
  dateText: {
    color: '#1C1C1C',
    fontSize: 12,
    fontWeight: '400',
  },
  timelineButton: {
    marginTop: 12,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  timelineText: {
    color: '#32BCAD',
    fontSize: 14,
    fontWeight: '600',
  },
  divider: {
    width: '100%',
    marginTop: 12,
  },
});

export default RequestSummary;
