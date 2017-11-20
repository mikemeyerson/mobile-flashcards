import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native';
import { createDeck } from '../../ducks/decks';

// TODO: Also use Add Card component here?
// TODO: Make container component?

class AddDeck extends Component {
  state = {
    deckTitle: '',
  };

  handleChangeText = (deckTitle) =>
    this.setState(() => ({
      deckTitle,
    }));

  handleSubmit = () => {
    const { createNewDeck, navigation } = this.props;
    const newDeck = {
      id: v4(),
      title: this.state.deckTitle,
    };

    createNewDeck(newDeck);

    navigation.navigate('Home');

    this.setState(() => ({
      deckTitle: '',
    }));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.header}>Name your new deck:</Text>
        <TextInput
          autoFocus
          autoCapitalize="words"
          maxLength={30}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmit}
          style={styles.input}
          value={this.state.deckTitle}
        />
      </KeyboardAvoidingView>
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
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 2,
    alignSelf: 'stretch',
    paddingBottom: 5,
    margin: 20,
  },
});

export default connect(null, { createNewDeck: createDeck })(AddDeck);