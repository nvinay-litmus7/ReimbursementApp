import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const FloatingActionButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.fabContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdf648109d9574e18a5392274cb912a6537b81ea34e159a7317c12b4868ed31b?placeholderIfAbsent=true&apiKey=16c599d5537e4a659aa8c1aa8d607678',
        }}
        style={styles.fabIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#32BCAD',
    width: 56,
    height: 56,
    padding: 16,
  },
  fabIcon: {
    width: 24,
    aspectRatio: 1,
  },
});

export default FloatingActionButton;
