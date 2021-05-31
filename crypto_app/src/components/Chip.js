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

const chipStyle = (withColor, color) => {  
  color = withColor ? color : colors.gray;
 
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

const rankColor = (rankVelue) => { 
  switch (rankVelue) {
    case 1:
    case 2: return  colors.yellowGold;
    case 3:
    case 4: return  colors.copper;
    default: return  colors.gray;     
  }
}



const Chip = ({ value, rank, color, pressable, textColor = 'black' }) => {
  
  return(
  <TouchableOpacity
    disabled={!pressable}
    style={chipStyle(color,rankColor(rank))} 
    //onPress={() => onPress(value)}
  >
    <Text style={textStyle(textColor)}>{value}</Text>
  </TouchableOpacity>)

};

export default Chip;
