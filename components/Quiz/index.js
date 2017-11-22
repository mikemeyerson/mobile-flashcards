import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Question from './Question';
import QuizComplete from './QuizComplete';
import { getCardsForDeck } from '../../ducks';

class Quiz extends Component {
  state = {
    score: 0,
    cardIndex: 0,
  };

  onPress = (isCorrect) => {
    this.setState((prevState) => ({
      score: isCorrect ? prevState.score + 1 : prevState.score,
      cardIndex: prevState.cardIndex + 1,
    }));
  };

  render() {
    const { score, cardIndex } = this.state;
    const { cards } = this.props;

    if (cardIndex >= cards.length || cardIndex < 0) {
      const scoreAsPercent = Math.round(score / cards.length * 100);

      return <QuizComplete score={scoreAsPercent} />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.subheader}>{`Question ${cardIndex + 1} of ${cards.length}`}</Text>
        <Question card={cards[cardIndex]} onPress={this.onPress} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  cards: getCardsForDeck(state, ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps, null)(Quiz);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
