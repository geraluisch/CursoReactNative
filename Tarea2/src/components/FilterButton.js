import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#f1c40f',
  },
});

const FilterButton = ({ onPress = () => {} }) => {
  Icon.loadFont();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="filter" color="black" size={30} />
    </TouchableOpacity>
  );
};

export default FilterButton;
