import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AddDeck from './components/AddDeck';
import DeckList from './components/DeckList';
import DeckDetails from './components/DeckDetails';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import PhoneStatusBar from './components/PhoneStatusBar';
import reducer from './reducers';


const Tabs = TabNavigator({
  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({ tintColor }) =>
        <MaterialCommunityIcons name="cards" size={30} color={tintColor} />,
    },
  },
  Create: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) =>
        <MaterialIcons name="add-box" size={30} color={tintColor} />,
    },
  },
}, {
  navigationOptions: {
    header: null,
  },
  animationEnabled: true,
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
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
      title: 'New Card',
    }),
  },
});

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <PhoneStatusBar />
      <MainNavigator />
    </View>
  </Provider>
);
