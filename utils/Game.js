import { View, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function Game(p) {
  const [score, setScore] = useState(0);

  return (
    <View >
      <h1>Score: {score}</h1>
      <Button onPress={() => setScore(score + 1)} style={styles.circle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
    backgroundColor: 'red',
  },
});
