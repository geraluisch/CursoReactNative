import React from 'react';
import genre from '../lib/genre.json';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    //backgroundColor: 'gray',
    margin: 5,
    borderRadius: 20,
  },
  text: {
    color: '#bdc3c7',
    fontWeight: 'bold',
  },
});

const chipStyle = (withColor, color) => {
  color = withColor ? color : 'gray'; 
  return {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: color,
    margin: 5,
    borderRadius: 20,
  }
}



const Chip = ({ value, color, pressable, onPress }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={chipStyle(color,genre[value])} //{styles.container}
    onPress={() => onPress(value)}
  >
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default Chip;
