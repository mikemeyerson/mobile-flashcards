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
  buttonText: {
    fontSize: 20,
  },
});

export default ButtonGroup;
