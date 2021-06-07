import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,   
    margin: 5,
    borderRadius: 20,
    
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});

const chipStyle = (color) => {   
 
  return {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: color,
    margin: 5,
    borderRadius: 20,    
  }
}

const textStyle = (color) => {
  return {
    color: color,
    fontWeight: 'bold',
  }
}

const Chip = ({ value, color = colors.gray, pressable, textColor = 'black' }) => {
  
  return(
  <TouchableOpacity
    disabled={!pressable}
    style={chipStyle(color)} 
    //onPress={() => onPress(value)}
  >
    <Text style={textStyle(textColor)}>{value}</Text>
  </TouchableOpacity>)

};

export default Chip;
