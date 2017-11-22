import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../shared/Button';

class Question extends Component {
  state = {
    showAnswer: false,
  };

  toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer });

  render() {
    const { card, onPress } = this.props;
    const { showAnswer } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{showAnswer ? card.answer : card.question}</Text>
        <TouchableOpacity onPress={this.toggleAnswer}>
          <Text style={{ margin: 15 }}>Show {showAnswer ? 'Question' : 'Answer'}</Text>
        </TouchableOpacity>
        <Button style={styles.correct} onPress={() => onPress(true)}>
          <Text style={styles.buttonText}>Correct</Text>
        </Button>
        <Button style={styles.incorrect} onPress={() => onPress(false)}>
          <Text style={styles.buttonText}>Incorrect</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
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
