import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default () => (
  <View style={styles.center}>
    <MaterialIcons name="add-box" size={80} color="gray" />
    <Text style={styles.header}>Create a deck to get started!</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gray',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
