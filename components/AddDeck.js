import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AddDeck extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Add Deck</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddDeck;