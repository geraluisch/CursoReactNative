import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 300,
    width: '100%',
    backgroundColor: '#34495e',
  },
});

const MovieCardImage = ({ 
  validImage,
  posterurl,
  actors,
  description,
  onError = () => { },
  onLoadEnd = () => { },
  onLongPress = () => { }, 
}) => {

  const navigation = useNavigation();
  // puede ir código
  return (
    <TouchableHighlight
      onLongPress={onLongPress}
      onPress={() => navigation.navigate('FullMovie',
        { posterurl,
          actors,
          description,
          validImage 
        }
      )}
      underlayColor="transparent"
    >
      <Image
        style={styles.image}
        source={
          validImage
            ? { uri: posterurl }
            : require('../../assets/no_image_available.jpg')
        }
        onError={onError}
        onLoadEnd={onLoadEnd}
      />
    </TouchableHighlight>
  );
};

export default MovieCardImage;
