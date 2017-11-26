import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Button from '../shared/Button';

class QuizComplete extends PureComponent {
  state = {
    bounceValue: new Animated.Value(1),
    subheaderOpacity: new Animated.Value(0),
    scoreOpacity: new Animated.Value(0),
  };

  componentDidMount() {
    const { bounceValue, subheaderOpacity, scoreOpacity } = this.state;

    Animated.sequence([
      Animated.parallel([
        Animated.timing(bounceValue, { duration: 300, toValue: 1.2 }),
        Animated.timing(subheaderOpacity, { duration: 500, toValue: 1 }),
      ]),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 }),
      Animated.timing(scoreOpacity, { duration: 800, toValue: 1 }),
    ]).start();
  }

  render() {
    const { score, onPress } = this.props;
    const bounce = { transform: [{ scale: this.state.bounceValue }] };
    const subOpacity = { opacity: this.state.subheaderOpacity };
    const scoreOpacity = { opacity: this.state.scoreOpacity, paddingLeft: 5 };

    return (
      <View style={styles.center}>
        <Animated.Text style={[styles.header, bounce]}>Quiz Complete!</Animated.Text>
        <View style={styles.row}>
          <Animated.Text style={[styles.subheader, subOpacity]}>Score: </Animated.Text>
          <Animated.Text style={[styles.subheader, scoreOpacity]}>{`${score}%`}</Animated.Text>
        </View>
        <Button onPress={onPress}>
          <Text>Try Again</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default QuizComplete;
