import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { v4 } from 'uuid';
import Button from './shared/Button';
import { getDeckById } from '../ducks';
import { addCardToDeck } from '../ducks/cards';

// TODO: Feature: add multiple cards at once

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleChangeText = (fieldName, value) =>
    this.setState(() => ({
      [fieldName]: value,
    }));

  handleQuestionChange = this.handleChangeText.bind(this, 'question');
  handleAnswerChange = this.handleChangeText.bind(this, 'answer');

  handleSubmit = () => {
    const { createNewCard, navigation, deck } = this.props;

    const card = {
      ...this.state,
      id: v4(),
      parentId: deck.id,
    };

    createNewCard(card);

    navigation.goBack();

    this.setState(() => ({
      question: '',
      answer: '',
    }));
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoFocus
          maxLength={50}
          onChangeText={this.handleQuestionChange}
          onSubmitEditing={this.handleSubmit}
          placeholder="Question"
          style={styles.input}
          value={question}
        />
        <TextInput
          maxLength={100}
          onChangeText={this.handleAnswerChange}
          onSubmitEditing={this.handleSubmit}
          placeholder="Answer"
          style={styles.input}
          value={answer}
        />
        <Button onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    paddingBottom: 5,
    margin: 20,
  },
});

const mapStateToProps = (state, ownProps) => ({
  deck: getDeckById(state, ownProps.navigation.state.params.id),
});

const mapDispatchToProps = { createNewCard: addCardToDeck };

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
