import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckDetails from './components/DeckDetails';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import reducer from './ducks';

const MainNavigator = StackNavigator({
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
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.deck.title,
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: () => ({
      title: '[deck.title here] Quiz',
    }),
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: () => ({
      title: 'Add Card',
    }),
  },
});

const initialState = {
  decks: {
    byId: {
      1: {
        title: 'Art',
        id: 1,
        questions: [],
      },
      2: {
        title: 'Science',
        id: 2,
        questions: [],
      },
      3: {
        title: 'Math',
        id: 3,
        questions: [],
      },
      4: {
        title: 'History',
        id: 4,
        questions: [],
      },
      5: {
        title: 'Writing',
        id: 5,
        questions: [],
      },
      6: {
        title: 'Music',
        id: 6,
        questions: [],
      },
      7: {
        title: 'Sports',
        id: 7,
        questions: [],
      },
      8: {
        title: 'Coding',
        id: 8,
        questions: [],
      },
    },
    allIds: [1, 2, 3, 4, 5, 6, 7, 8],
  },
};

const store = createStore(reducer, initialState);

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <MainNavigator />
    </View>
  </Provider>
);
