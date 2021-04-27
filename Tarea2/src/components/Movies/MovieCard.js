import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import Rating from '../Rating';
import ActorsList from './ActorsList';
import MovieCardImage from './MovieCardImage';
import MovieFullscreenImage from './MovieFullscreenImage';
import MovieDescription from './../MovieDescription';
import GenreList from './GenreList';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  textColor: {
    color: '#34495e',
  },
  bigFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    zIndex: 9,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
  }
});

export default class MovieCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      validImage: true,
      starRating: 1,
      like: false,
      showFullscreenImage: false,
    };
  }

  starRatingChange = starPosition => this.setState({ starRating: starPosition })

  toggleLike = () => this.setState(({ like }) => ({ like: !like }));

  toggleFullscreen = () => this.setState(({ showFullscreenImage }) => ({ showFullscreenImage: !showFullscreenImage }));

  render() {
    const { posterurl, title, year, imdbRating, actors, description, genres } = this.props;
    const { showFullscreenImage,
      validImage,
      isLoading,
      starRating,
      like,
    } = this.state;

    return (
      <View style={styles.container}>
        { isLoading && <ActivityIndicator color="red" size="large" />}
        { showFullscreenImage
          && validImage
          && <MovieFullscreenImage onPress={this.toggleFullscreen} source={{ uri: posterurl }} />
        }
        <MovieCardImage
          validImage={validImage}
          posterurl={posterurl}
          onError={() => this.setState({ validImage: false })}
          onLoadEnd={() => this.setState({ isLoading: false })}
          onLongPress={this.toggleFullscreen}
        />
        {/* <Image
          style={styles.image}
          source={
            validImage
              ? { uri: posterurl }
              : require('../../assets/no_image_available.jpg')
          }
          onError={() => this.setState({ validImage: false })}
          onLoadEnd={() => this.setState({ isLoading: false })}
        /> */}
        <View style={styles.likeRating}>
          <Rating heart like={like} onRatingPress={this.toggleLike} />
        </View>
        <Text style={[styles.title, styles.textColor]}>{title}</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor]}>{year}</Text>
          <Rating
            star
            starRating={starRating}
            onRatingPress={this.starRatingChange}
          />
          <Text style={[styles.description, styles.textColor, styles.bigFont]}>
            {imdbRating}
          </Text>
        </View>
        <MovieDescription description={description} />
        <GenreList genres={genres} />
        <ActorsList actors={actors} />        
      </View>
    );
  }
}
