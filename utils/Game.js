import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearTextGradient } from 'react-native-text-gradient';

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
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: '#FF0000',
    alignContent: "center",
    backgroundColor: '#9b12db',
    borderColor: '#fff',
    borderWidth: 3 
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: '#9b12db',
  },
});
