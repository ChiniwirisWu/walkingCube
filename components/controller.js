import React from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ControllerButton = ({ direction, icon, onPress })=>{
  return (
    <TouchableHighlight underlayColor="#b4fad9" onPress={()=> onPress()}>
      <View style="icon" style={ styles.buttonContainer } style={ [styles.buttonContainer, styles.button] }>
        <AntDesign 
          name={ icon }
          size={ 20 }
          color="#000"
        />
      </View>
    </TouchableHighlight>
  )
}

export default function Controller({ onUp, onDown, onRight, onLeft }){
  return(
    <View style={ styles.container }>
      <View style={ styles.buttonContainer } />
      <ControllerButton direction="up" icon="caretup" onPress={ onUp } />
      <View style={ styles.buttonContainer } />
      <ControllerButton direction="right" icon="caretleft" onPress={ onLeft } />
      <View style={ styles.buttonContainer } />
      <ControllerButton direction="left" icon="caretright" onPress={ onRight } />
      <View style={ styles.buttonContainer } />
      <ControllerButton direction="down" icon="caretdown" onPress={ onDown }/>
      <View style={ styles.buttonContainer } />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap', 
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 99.3,
    height: 99.3,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  button: {
    backgroundColor: '#eee'
  }
})

