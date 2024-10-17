/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReimbursementScreen from '@screens/reimbursementScreen';
import TravelScreen from '@screens/travelScreen';

import {MainTabParamList} from '@constants/types';
import {colors} from '@constants/themes';
import TravelIcon from '@components/travelIcon';
import ReimbursementIcon from '@components/reimbursementIcon';

const Tab = createBottomTabNavigator<MainTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Travel') {
            return <TravelIcon focused={focused} color={color} size={size} />;
          } else {
            return (
              <ReimbursementIcon focused={focused} color={color} size={size} />
            );
          }
        },
      })}>
      <Tab.Screen
        name="Travel"
        component={TravelScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.label, focused && styles.activeLabel]}>
                Travel
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Reimbursement"
        component={ReimbursementScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <View style={styles.labelContainer}>
              <Text style={[styles.label, focused && styles.activeLabel]}>
                Reimbursement
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: colors.secondary200,
  },
  activeLabel: {
    color: colors.primary300,
  },
});

export default TabNavigator;
