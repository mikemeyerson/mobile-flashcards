import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import ButtonGroup from './ButtonGroup';
import { getDeckById, getCardsForDeck } from '../../ducks';

const DeckDetails = ({ navigation, deck = {}, cards = [] }) => {
  const onQuizPress = () => navigation.navigate('Quiz', { id: deck.id, title: deck.title });
  const onAddCardPress = () => navigation.navigate('AddCard', { id: deck.id });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{deck.title}</Text>
      <Text style={styles.subheader}>{`${cards.length} card${cards.length !== 1 ? 's' : ''}`}</Text>
      <ButtonGroup cards={cards} onQuizPress={onQuizPress} onAddCardPress={onAddCardPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 30,
    color: 'gray',
  },
});

const mapStateToProps = (state, ownProps) => ({
  deck: getDeckById(state, ownProps.navigation.state.params.id),
  cards: getCardsForDeck(state, ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps, null)(DeckDetails);
