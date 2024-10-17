import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@constants/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import useAuthStore from '@store/authStore';
import {loginWithMicrosoft} from '@service/api';

const LoginScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {loadTokens, accessToken} = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      await loadTokens();
      console.log('Access token: ', accessToken);
      if (accessToken) {
        navigation.navigate('Main');
      }
    };

    initializeAuth();
  }, [loadTokens, accessToken, navigation]);

  const handleLogin = async () => {
    try {
      const result = await loginWithMicrosoft();
      if (result.success) {
        navigation.navigate('Main');
      } else {
        console.log('Error navigating');
      }
    } catch (error) {
      console.log('Unexpected error occured');
    }
  };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text>LoginScreen</Text>

      <Button title="Login" onPress={handleLogin} />

      <Button
        title="Navigate to Home"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default LoginScreen;
