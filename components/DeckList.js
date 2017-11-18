import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import DeckPreview from './DeckPreview';
import { getDecks } from '../reducers';

// TODO: Make list of decks scrollable
class DeckList extends Component {
  onPress = (id) => this.props.navigation.navigate('DeckView', { deck: this.state.decks[id] });

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text style={styles.header}>
            Create a deck to get started!
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text>Deck List</Text>
        {decks.map((deck) => (
          <DeckPreview key={deck.id} onPress={this.onPress} deck={deck} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  decks: getDecks(state),
});

export default connect(
  mapStateToProps,
  null,
)(DeckList);
