import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@constants/types';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>LoginScreen</Text>

      <Button
        title="Navigate to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default LoginScreen;
