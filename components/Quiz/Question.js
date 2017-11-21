import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../shared/Button';

const Question = ({ card, onPress }) => (
  <View style={styles.container}>
    <Text style={styles.header}>{card.question}</Text>
    <Text>{card.answer}</Text>
    <Button style={styles.correct} onPress={() => onPress(true)}>
      <Text style={styles.buttonText}>Correct</Text>
    </Button>
    <Button style={styles.incorrect} onPress={() => onPress(false)}>
      <Text style={styles.buttonText}>Incorrect</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  correct: {
    backgroundColor: 'green',
    borderWidth: 0,
  },
  incorrect: {
    backgroundColor: 'red',
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Question;
