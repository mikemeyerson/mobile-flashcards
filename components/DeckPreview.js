import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeckPreview = ({ deck, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={() => onPress(deck.id)}>
    <Text style={styles.header}>{deck.title}</Text>
    <Text>{deck.questions.length} cards</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 7,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DeckPreview;
