import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function Game() {
  const [score, setScore] = useState(0);

  return (
    <View>
      <Text style={styles.h1}>Score: {score}</Text>
      <TouchableOpacity
        onPress={() => setScore(score + 1)}
        style={styles.CircleShapeView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  CircleShapeView: {
    // To make Circle Shape
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#FF0000',
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold"
  },
});
