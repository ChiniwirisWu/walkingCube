import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Square = ({actual, reward, position})=>{
  const positions = {
    '0': [0,0], 
    '1': [0,1], 
    '2': [0,2], 
    '3': [1,0], 
    '4': [1,1], 
    '5': [1,2], 
    '6': [2,0], 
    '7': [2,1], 
    '8': [2,2], 
  }
  if(positions[position][0] == actual[0] && positions[position][1] == actual[1]) return <View style={ [styles.square, styles.actual] }></View>
  if(positions[position][0] == reward[0] && positions[position][1] == reward[1]) return <View style={ [styles.square, styles.reward] }></View>
  return <View style={ [styles.square] }></View>
}

export default function Screen({actual, reward}){
  return (
    <View style={ styles.container }>
      <Square position="0" actual={ actual } reward={ reward }/>
      <Square position="1" actual={ actual } reward={ reward }/>
      <Square position="2" actual={ actual } reward={ reward }/>
      <Square position="3" actual={ actual } reward={ reward }/>
      <Square position="4" actual={ actual } reward={ reward }/>
      <Square position="5" actual={ actual } reward={ reward }/>
      <Square position="6" actual={ actual } reward={ reward }/>
      <Square position="7" actual={ actual } reward={ reward }/>
      <Square position="8" actual={ actual } reward={ reward }/>
  </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  square: {
    width: 90,
    height: 90,
    borderWidth: 1
  },
  actual: {
    backgroundColor: '#57a199'
  },
  reward: {
    backgroundColor: '#a15459'
  }
})

