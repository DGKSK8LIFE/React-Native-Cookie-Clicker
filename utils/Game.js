import { View, StyleSheet, Button, Text } from 'react-native';
import React, { useState } from 'react';

export default function Game(p) {
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text style={styles.h1}>Score: {score}</Text>
      <View
        onTouchStart={() => setScore(score + 1)}
        style={styles.CircleShapeView}
      />
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
  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
  },
  h1: {
    fontSize: 40,
  },
});
