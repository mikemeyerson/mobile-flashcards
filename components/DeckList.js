import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckCard from './DeckCard';

// TODO: Make list of decks scrollable
class DeckList extends Component {

	state = {
			decks :[{
			id: 0,
			title: "deck 1",
			numCards: 3
		}, {
			id: 1,
			title: "deck 2",
			numCards: 7
		}]
	};

	onPress = (id) => this.props.navigation.navigate('DeckView', { deck: this.state.decks[id] });

	render() {
		const { decks } = this.state;

		return (
			<View style={styles.container}>
				<Text>Deck List</Text>
				<DeckCard onPress={this.onPress} deck={decks[0]} />
				<DeckCard onPress={this.onPress} deck={decks[1]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		padding: 20,
    backgroundColor: 'gray',
    alignItems: 'stretch',
  },
	row: {
		flex: 1,
		flexDirection: 'row',
	}
});

export default DeckList;
