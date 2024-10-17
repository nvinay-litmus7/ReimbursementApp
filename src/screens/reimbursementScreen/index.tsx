import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '@components/header';
import DisclaimerBox from '@components/disclaimerBox';
import {SearchBar} from 'react-native-screens';
import ExpenseRequestList from '@components/expenseRequestList';

interface ReimbursementRequestsProps {}

const ReimbursementScreen: React.FC<ReimbursementRequestsProps> = () => {
  return (
    <View style={styles.container}>
      <Header title="Reimbursement Requests" />
      <ScrollView style={styles.content}>
        <DisclaimerBox />
        <SearchBar />
        <View style={styles.textContainer}>
          <Text style={styles.sectionTitle}>Expense Request</Text>
        </View>
        <ExpenseRequestList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  textContainer: {
    alignSelf: 'stretch',
    borderRadius: 4,
    // marginTop: 12,
    width: '100%',
    backgroundColor: '#31bcad',
    // maxWidth: 343,
    // paddingHorizontal: 24,
    // paddingVertical: 12,
  },
  sectionTitle: {
    textAlign: 'center',
    fontFamily: 'Aptos, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    color: '#020617',
    marginTop: 16,
    marginBottom: 16,
  },
});

export default ReimbursementScreen;
