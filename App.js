import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import Navigator from './components/Navigator';
import reducer from './ducks';
import { setLocalNotification } from './utils/notifications';

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}
