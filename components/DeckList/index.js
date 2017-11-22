import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet } from 'react-native';
import CardsContainer from './CardsContainer';
import DeckPreview from './DeckPreview';
import NoDecksFound from './NoDecksFound';
import { getDecks } from '../../ducks';
import { retrieveDecks } from '../../ducks/decks';
import { retrieveCards } from '../../ducks/cards';

class DeckList extends Component {
  componentDidMount() {
    const { loadDecks, loadCards } = this.props;

    loadDecks();
    loadCards();
  }

  onPress = ({ id, title }) => this.props.navigation.navigate('DeckDetails', { id, title });

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

const mapDispatchToProps = {
  loadDecks: retrieveDecks,
  loadCards: retrieveCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
