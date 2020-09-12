import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PowerUps from './PowerUps';

export default function Game() {
  const [score, setScore] = useState(0);
  
  return (
    <View>
      <Text style={styles.h1}>{score}</Text>
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
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF0000',
    alignContent: "center"
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
});
