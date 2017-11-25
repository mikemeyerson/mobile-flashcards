import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, Animated } from 'react-native';
import Question from './Question';
import QuizComplete from './QuizComplete';
import { getCardsForDeck } from '../../ducks';
import { setLocalNotification, clearLocalNotification } from '../../utils/notifications';

class Quiz extends Component {
  state = {
    score: 0,
    cardIndex: 0,
    opacity: new Animated.Value(1),
  };

  componentDidUpdate() {
    Animated.timing(this.state.opacity, { duration: 500, toValue: 1 }).start();
  }

  handleTryAgain = () => {
    this.setState({
      score: 0,
      cardIndex: 0,
    });
  };

  handleQuestionResponse = (isCorrect) => {
    // If quiz completed, reset notifications
    if (this.state.cardIndex + 1 === this.props.cards.length) {
      clearLocalNotification().then(setLocalNotification);
    }

    Animated.timing(this.state.opacity, { duration: 300, toValue: 0 }).start(() => {
      this.setState((prevState) => ({
        score: isCorrect ? prevState.score + 1 : prevState.score,
        cardIndex: prevState.cardIndex + 1,
      }));
    });
  };

  render() {
    const { score, cardIndex, opacity } = this.state;
    const { cards } = this.props;

    if (cardIndex >= cards.length) {
      const scoreAsPercent = Math.round(score / cards.length * 100);

      return <QuizComplete score={scoreAsPercent} onPress={this.handleTryAgain} />;
    }

    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.subheader}>{`Question ${cardIndex + 1} of ${cards.length}`}</Text>
        <Question card={cards[cardIndex]} onPress={this.handleQuestionResponse} />
      </Animated.View>
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
