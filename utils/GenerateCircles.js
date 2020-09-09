import { View, StyleSheet } from 'react-native';
import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function SketchCircle(p) {
  return <View style={styles.circle}></View>;
}

const styles = StyleSheet.create({
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    backgroundColor: 'red',
  },
});
