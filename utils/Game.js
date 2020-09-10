import { View, StyleSheet, Button, Text } from 'react-native';
import React, { useState } from 'react';

export default function Game(props) {
  const [score, setScore] = useState(0);

  return (
    <View>
      {props.shown==true?<View
      onClick={()=>setScore(score+1)}
        onTouchStart={() => {
        props.onHide()
        }}
        style={styles.CircleShapeView}
      />:<Text></Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  CircleShapeView: {
    // To make Circle Shape
    width: 84,
    height: 84,
    borderRadius: 84 / 2,
    backgroundColor: '#FF00FF',
  },
  h1: {
    fontSize: 40,
  },
});
