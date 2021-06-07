import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Chip from '../Chip';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap:'wrap',
  },
});

const TagList = ({ tags }) => {
    const tagsChip = tags.map((tag, index) => (
        <Chip         
          key={`tags-${index}`} 
          value={tag}
          textColor={ 'white' }
          color={ '#69A4C4' }
        />
      ));
    
      return (
        <View style={styles.container}>
          {tagsChip}
        </View>
    );
};

export default TagList;