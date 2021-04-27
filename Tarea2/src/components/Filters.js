import React from 'react'
import { View, StyleSheet } from 'react-native'
import Chip from './Chip'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Filters = ({ moviesGenres, onPress }) => {
  const genresChip = moviesGenres.map((genre, index) => (
    <Chip
      pressable
      onPress={onPress}
      key={`genres-${index}`} 
      value={genre}
      color={true}
    />
  ));

  return (
    <View style={styles.container}>
      {genresChip}
    </View>
  );
};

export default Filters;

