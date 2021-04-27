import React from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';

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
  onError = () => { },
  onLoadEnd = () => { },
  onLongPress = () => { },
}) => {
  // puede ir código
  return (
    <TouchableHighlight
      onLongPress={onLongPress}
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
