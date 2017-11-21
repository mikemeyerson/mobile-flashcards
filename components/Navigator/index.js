import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddDeck from '../AddDeck';
import DeckList from '../DeckList';
import DeckDetails from '../DeckDetails';
import Quiz from '../Quiz';
import AddCard from '../AddCard';

const Navigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: ({ navigation }) => ({
      title: 'My Decks',
      headerLeft: null,
      headerRight: <Button title="New" onPress={() => navigation.navigate('Create')} />,
    }),
  },
  Create: {
    screen: AddDeck,
    navigationOptions: () => ({
      title: 'Create Deck',
    }),
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation: { state: { params: { title } } } }) => ({
      title,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation: { state: { params: { title } } } }) => ({
      title: `${title} Quiz`,
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: 'Add Card',
    }),
  },
});

export default Navigator;
