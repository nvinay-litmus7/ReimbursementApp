import {RootStackParamList} from '@constants/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export interface ExpenseRequest {
  id: string;
  type: string;
  amount: number;
  reimbursedAmount?: number;
  status: 'Draft' | 'Submitted' | 'Completed';
  date: string;
  iconUri: string;
}

interface ExpenseRequestItemProps {
  request: ExpenseRequest;
}

const ExpenseRequestItem: React.FC<ExpenseRequestItemProps> = ({request}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const getStatusColor = (status: ExpenseRequest['status']) => {
    switch (status) {
      case 'Draft':
        return '#1059BE';
      case 'Submitted':
        return '#FF9411';
      case 'Completed':
        return '#32C583';
      default:
        return '#1C1C1C';
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ReimbursementDetail')}>
      <View style={styles.leftContent}>
        <Image source={{uri: request.iconUri}} style={styles.icon} />
        <View style={styles.details}>
          <Text style={styles.id}>{request.id}</Text>
          <Text style={styles.type}>{request.type}</Text>
          <View style={styles.amountContainer}>
            {request.reimbursedAmount ? (
              <>
                <Text style={styles.originalAmount}>
                  ${request.amount.toFixed(2)}
                </Text>
                <Text style={styles.reimbursedAmount}>
                  ${request.reimbursedAmount.toFixed(2)}
                </Text>
              </>
            ) : (
              <Text style={styles.amount}>${request.amount.toFixed(2)}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.rightContent}>
        <Text style={[styles.status, {color: getStatusColor(request.status)}]}>
          {request.status}
        </Text>
        <Text style={styles.date}>{request.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  details: {
    justifyContent: 'center',
  },
  id: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'Aptos, sans-serif',
  },
  type: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1C',
    marginTop: 4,
    fontFamily: 'Aptos, sans-serif',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#32BCAD',
    fontFamily: 'Aptos, sans-serif',
  },
  originalAmount: {
    fontSize: 12,
    color: '#858585',
    marginRight: 4,
    fontFamily: 'Aptos, sans-serif',
  },
  reimbursedAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#32BCAD',
    fontFamily: 'Aptos, sans-serif',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Aptos, sans-serif',
  },
  date: {
    fontSize: 12,
    color: '#1C1C1C',
    marginTop: 4,
    fontFamily: 'Aptos, sans-serif',
  },
});

export default ExpenseRequestItem;
