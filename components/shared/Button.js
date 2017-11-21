import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ children, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
});

export default Button;
