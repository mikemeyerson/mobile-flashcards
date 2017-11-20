import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DeckPreview from './DeckPreview';
import { getDecks } from '../reducers';

class DeckList extends Component {
  onPress = (deck) => this.props.navigation.navigate('DeckDetails', { deck });

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return (
        <View style={[styles.container, styles.center]}>
          <MaterialIcons name="add-box" size={80} color="gray" />
          <Text style={styles.header}>Create a deck to get started!</Text>
        </View>
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {decks.map((deck) => <DeckPreview key={deck.id} onPress={this.onPress} deck={deck} />)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'gray',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  decks: getDecks(state),
});

export default connect(mapStateToProps, null)(DeckList);
