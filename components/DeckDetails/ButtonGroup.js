import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../shared/Button';

const ButtonGroup = ({ cards, onAddCardPress, onQuizPress }) => (
  <View style={styles.buttonGroup}>
    <Button onPress={onAddCardPress}>
      <Text style={styles.buttonText}>Add Card</Text>
    </Button>
    {cards.length > 0 && (
      <Button onPress={onQuizPress}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </Button>
    )}
  </View>
);

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 20,
  },
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
  buttonText: {
    fontSize: 20,
  },
});

export default ButtonGroup;
