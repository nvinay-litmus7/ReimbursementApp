import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface InfoFieldProps {
  label: string;
  value: string;
  iconSource?: {uri: string};
}

const InfoField: React.FC<InfoFieldProps> = ({label, value, iconSource}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        {iconSource && (
          <Image resizeMode="contain" source={iconSource} style={styles.icon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: '#4F4F4F',
    fontWeight: '600',
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(229, 229, 229, 1)',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: 'rgba(79, 79, 79, 1)',
    fontWeight: '400',
  },
  icon: {
    width: 16,
    aspectRatio: 1,
  },
});

export default InfoField;
