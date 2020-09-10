import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Game from './utils/Game';
// import  CirclePos from "./utils/Circles"
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const testArr = [1, 2, 3, 4];

export default function App() {
  function createStyles() {
    const styles = StyleSheet.create({
      paddingLeft: (60 + width) * Math.random() - 120,
      paddingTop: (height + 60) * Math.random() - 120,
    });
    return styles;
  }
  const [score, setScore] = useState(0);
  const [show,setShow] = useState([false,true])
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <View style={createStyles()}>
        <Game onHide={() => handleHide(0)} shown={show[0]} />
      </View>
      <View style={createStyles()}>
        <Game onHide={() => handleHide(1)} shown={show[1]} />
      </View>

      {/* <View style={createStyles()}>
        <Game onHide={() => handleHide(1)} shown={show[1]} />
      </View> */}
    </View>
  );
  function handleHide(index) {
    const circles = [...show]
   console.log(circles)
    circles[index]=false
    console.log(show,"old show!")
    setShow([!show[0],!show[1]])
    console.log(show,"show")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
