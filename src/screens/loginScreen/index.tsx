import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text>LoginScreen</Text>

      <Button
        title="Navigate to Home"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default LoginScreen;
