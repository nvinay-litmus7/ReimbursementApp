import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '@components/header';
// import RequestSummary from '@components/requestSummary';
import RequestInfo from '@components/requestInfo';
import ExpenseDetails from '@components/expenseDetails';
import FloatingActionButton from '@components/floatingActionButton';
// import RequestSummary from '@components/requestSummary';

const ReimbursementDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Request Details" />
      <ScrollView style={styles.scrollView}>
        {/* <RequestSummary /> */}
        <RequestInfo />
        <ExpenseDetails />
      </ScrollView>
      <FloatingActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 480,
    width: '100%',
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 57,
  },
});

export default ReimbursementDetailScreen;
