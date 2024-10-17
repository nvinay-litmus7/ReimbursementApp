import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DisclaimerBox: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7b2aec7dacad0852a44909e9708a44a418a145e0e79bd3de26c4b1ccbb0b4f49?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
          }}
          style={styles.icon}
        />
        <Text style={styles.title}>Disclaimer</Text>
      </View>
      <Text style={styles.content}>
        Invoices and necessary proofs must be kept until the reimbursement
        process is completed. The Finance department may demand the documents
        during the process.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9F0',
    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF9411',
    fontFamily: 'Aptos, sans-serif',
  },
  content: {
    fontSize: 12,
    color: '#4F4F4F',
    lineHeight: 18,
    fontFamily: 'Aptos, sans-serif',
  },
});

export default DisclaimerBox;
