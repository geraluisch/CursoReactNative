import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

const ActorsList = ({ actors, styleView }) => {
  Icon.loadFont();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FlatList
        style={styles.container}
        data={actors}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={actorName => {
          return actorName;
        }}
        renderItem={({ item: actorName }) => <Chip value={actorName} color={false} />}
      />
      <Icon
        style={{ paddingLeft: 3 }}
        name="arrow-right"
        size={20}
        color="black"
      />
    </View>
  );
};

export default ActorsList;
