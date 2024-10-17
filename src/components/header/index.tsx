import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NotificationBell} from '@assets/svgs';
import {HeaderProps} from '@constants/types';
import styles from './styles';

const Header: React.FC<HeaderProps> = ({title, onNotificationPress}) => {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
          onPress={onNotificationPress}
          style={styles.notificationButton}>
          <NotificationBell style={styles.notificationBell} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
