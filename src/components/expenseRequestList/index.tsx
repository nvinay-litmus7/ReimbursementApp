import ExpenseRequestItem from '@components/expenseRequestItem';
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
// import ExpenseRequestItem, { ExpenseRequest } from './ExpenseRequestItem';

interface ExpenseRequest {
  id: string;
  type: string;
  amount: number;
  reimbursedAmount?: number;
  status: 'Draft' | 'Submitted' | 'Completed';
  date: string;
  iconUri: string;
}
const expenseRequests: ExpenseRequest[] = [
  {
    id: 'RM-RQ-2021-2538',
    type: 'Accommodation',
    amount: 300,
    status: 'Draft',
    date: '29 Aug 24',
    iconUri:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6900d8ff0d68ca6a66d8a32d426766dcc8b5d8add95138031f6ac1f78b5430f7?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
  },
  {
    id: 'RM-RQ-2021-2539',
    type: 'Accommodation',
    amount: 300,
    status: 'Submitted',
    date: '29 Aug 24',
    iconUri:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/6900d8ff0d68ca6a66d8a32d426766dcc8b5d8add95138031f6ac1f78b5430f7?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
  },
  {
    id: 'RM-RQ-2021-2540',
    type: 'Food',
    amount: 21.69,
    reimbursedAmount: 21.61,
    status: 'Completed',
    date: '29 Aug 24',
    iconUri:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/d06955ef1b0eb34ae4596ae1b358f686b953952b2a5ca6b8f53b0cef26e56659?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
  },
  {
    id: 'RM-RQ-2021-2541',
    type: 'Food',
    amount: 21.69,
    reimbursedAmount: 21.61,
    status: 'Completed',
    date: '29 Aug 24',
    iconUri:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/fc3f9935a07ea5049177c9775402a397b56c152f786f7c3938f2ae5a086e0f5b?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
  },
];

const ExpenseRequestList: React.FC = () => {
  return (
    <FlatList
      data={expenseRequests}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ExpenseRequestItem request={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 16,
  },
});

export default ExpenseRequestList;
