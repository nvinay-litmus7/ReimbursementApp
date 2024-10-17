import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

interface SignInButtonProps {
  icon: string;
  text: string;
}

const SignInButton: React.FC<SignInButtonProps> = ({icon, text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image resizeMode="contain" source={{uri: icon}} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(50, 188, 173, 1)',
    borderWidth: 1,
    paddingVertical: 17,
    paddingHorizontal: 28,
    width: '100%',
    minHeight: 58,
  },
  icon: {
    width: 24,
    aspectRatio: 1.04,
    marginRight: 8,
  },
  text: {
    color: '#32BCAD',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignInButton;
