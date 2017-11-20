import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default ({ children, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
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
