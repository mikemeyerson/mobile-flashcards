import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Navigator from './components/Navigator';
import reducer from './ducks';

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
      <Navigator />
    </View>
  </Provider>
);
