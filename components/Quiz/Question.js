import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../shared/Button';

class Question extends Component {
  state = {
    showAnswer: false,
  };

  onCorrectPress = () => {
    this.setState({ showAnswer: false });
    this.props.onPress(true);
  };

  onIncorrectPress = () => {
    this.setState({ showAnswer: false });
    this.props.onPress(false);
  };

  toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer });

  render() {
    const { card } = this.props;
    const { showAnswer } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleAnswer}>
          <Text style={styles.header}>{showAnswer ? card.answer : card.question}</Text>
          <Text style={styles.toggleAnswerButton}>Show {showAnswer ? 'Question' : 'Answer'}</Text>
        </TouchableOpacity>
        <Button style={styles.correct} onPress={this.onCorrectPress}>
          <Text style={styles.buttonText}>Correct</Text>
        </Button>
        <Button style={styles.incorrect} onPress={this.onIncorrectPress}>
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
  toggleAnswerButton: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
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
