import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { getDeckById, getCardsForDeck } from '../ducks';

const Quiz = ({ deck, cards }) => (
  <View>
    <Text>Quiz View</Text>
  </View>
);

const mapStateToProps = (state, ownProps) => ({
  deck: getDeckById(state, ownProps.navigation.state.params.id),
  cards: getCardsForDeck(state, ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps, null)(Quiz);
