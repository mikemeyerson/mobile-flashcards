import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { addCardToDeck } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  handleChangeText = (fieldName, value) =>
    this.setState(() => ({
      fieldName: value,
    }));

  handleQuestionChange = this.handleChangeText.bind('question');
  handleAnswerChange = this.handleChangeText.bind('answer');

  handleSubmit = () => {
    const { createNewCard, navigation } = this.props;
    const { deck } = navigation.state.params;

    createNewCard(deck.id, this.state);

    navigation.back();

    this.setState(() => ({
      question: '',
      answer: '',
    }));
  };

  render() {
    const { title } = this.props.navigation.state.params.deck;
    const { question, answer } = this.state;

    return (
      <View>
        <Text style={styles.header}>Add a card to {title}</Text>
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
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default connect(null, { createNewCard: addCardToDeck })(AddCard);
