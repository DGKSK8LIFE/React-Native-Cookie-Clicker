import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Game from './utils/Game';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window');
const height = Dimensions.get('window');

export default function App() {
  function createStyles() {
    const styles = StyleSheet.create({
      paddingLeft: (85 + width) * Math.random() - 400,
      paddingTop: (height + 100) * Math.random() - 420,
    });
    return styles;
  }
  const [score, setScore] = useState(0);
  const [show, setShow] = useState([false, true]);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Score: {score}</Text>
      <View style={createStyles()}>
        <Game onHide={() => handleHide(0)} shown={show[0]} />
      </View>
      <View style={createStyles()}>
        <Game onHide={() => handleHide(1)} shown={show[1]} />
      </View>

      {/* <View style={createStyles()}>
        <Game onHide={() => handleHide(1)} shown={show[1]} />
      </View> */}
    </SafeAreaView>
  );
  function handleHide(index) {
    const circles = [...show];
    setScore(score + 1);
    setShow([!show[0], !show[1]]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
