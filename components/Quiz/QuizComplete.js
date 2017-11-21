import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../shared/Button';

const QuizComplete = ({ score, onPress }) => (
  <View style={styles.center}>
    <Text style={styles.header}>Quiz Complete!</Text>
    <Text style={styles.subheader}>{`Your score: ${score}%`}</Text>
    <Button onPress={onPress}>
      <Text>Try Again</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 15,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default QuizComplete;
