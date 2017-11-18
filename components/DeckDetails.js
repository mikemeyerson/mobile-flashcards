import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeckDetails = ({ navigation }) => {
  const deck = navigation.state.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{deck.title}</Text>
      <Text style={styles.subheader}>{deck.numCards} cards</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Add Card
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>
          Start Quiz
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 30,
    color: 'gray',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default DeckDetails;
