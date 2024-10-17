import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(229, 229, 229, 1)',
  },
  text: {
    marginHorizontal: 14,
    color: '#858585',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Divider;