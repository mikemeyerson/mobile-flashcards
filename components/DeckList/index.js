import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import CardsContainer from '../shared/CardsContainer';
import DeckPreview from './DeckPreview';
import NoDecksFound from './NoDecksFound';
import { getDecks } from '../../ducks';

class DeckList extends Component {
  onPress = (deck) => this.props.navigation.navigate('DeckDetails', { deck });

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return <NoDecksFound />;
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {decks.map((deck) => (
          <CardsContainer
            key={deck.id}
            deckId={deck.id}
            render={(cards) => <DeckPreview onPress={this.onPress} deck={deck} cards={cards} />}
          />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
});

const mapStateToProps = (state) => ({
  decks: getDecks(state),
});

export default connect(mapStateToProps, null)(DeckList);
