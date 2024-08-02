import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Controller from './components/controller';
import Screen from './components/screen';

export default function App() {
  const [actual, setActual] = useState([0,0])
  const [reward, setReward] = useState([2,2])
  const [counter, setCounter] = useState(95)

  const resetReward = ()=>{
    const x = Math.floor(Math.random() * 3)
    const y = Math.floor(Math.random() * 3)
    setCounter((counter + 1) % 100)
    setReward([x, y])
  }

  if(actual[0] == reward[0] && actual[1] == reward[1]) resetReward()

  const onRight = ()=>{
    setActual([actual[0], (actual[1] + 1) % 3])
  }

  const onLeft = ()=>{
    setActual([actual[0], Math.abs(actual[1] - 1) % 3])
  }

  const onUp = ()=>{
    setActual([Math.abs(actual[0] - 1) % 3, actual[1]])
  }

  const onDown = ()=>{
    setActual([Math.abs(actual[0] + 1) % 3, actual[1]])
  }

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <View style={ styles.gameViewContainer }>
        <Screen actual={ actual } reward={ reward } />
      </View>
      <View style={ styles.controllerContainer }>
        <Controller onUp={ onUp } onLeft={ onLeft } onRight={ onRight } onDown={ onDown } />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gameViewContainer: {
    width: 300,
    height: 300,
  },
  controllerContainer: {
    width: 300,
    height: 300,
  }
});
