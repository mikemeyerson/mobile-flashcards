import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardsContainer from '../shared/CardsContainer';
import ButtonGroup from './ButtonGroup';

// TODO: Connect to Redux to get cards (and maybe the deck)
const DeckDetails = ({ navigation }) => {
  const { deck } = navigation.state.params;

  const onQuizPress = () => navigation.navigate('Quiz');
  const onAddCardPress = () => navigation.navigate('AddCard', { deck });

  return (
    <CardsContainer
      deckId={deck.id}
      render={(cards) => (
        <View style={styles.container}>
          <Text style={styles.header}>{deck.title}</Text>
          <Text style={styles.subheader}>
            {`${cards.length} card${cards.length !== 1 ? 's' : ''}`}
          </Text>
          <ButtonGroup cards={cards} onQuizPress={onQuizPress} onAddCardPress={onAddCardPress} />
        </View>
      )}
    />
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

export default DeckDetails;
