import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

const GenreList = ({ genres }) => {
  Icon.loadFont(); 
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FlatList
        style={styles.container}
        data={genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={genreName => {
          return genreName;
        }}
        renderItem={({ item: genreName }) => <Chip value={genreName} color={true} />}
      />     
    </View>
  );
};

export default GenreList;
