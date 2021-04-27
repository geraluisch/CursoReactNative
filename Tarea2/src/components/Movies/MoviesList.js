import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, View, Modal, Button } from 'react-native';
import FilterButton from '../FilterButton';
import Filters from '../Filters';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
  filterButton: {
    position: 'absolute',
    top: '70%',
    left: '80%',
  },
});
export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      movies: props.movies,
      modalActive: false,
      moviesGenres: [],
    };
  };

  componentDidMount = () => {
    this.getGenresDataFromMovies();
  }

  getGenresDataFromMovies = () => {
    const { movies } = this.props;

    const genresData = movies.reduce((genresTypes, movie) => {
      return [...genresTypes, ...movie.genres];
    }, []);

    const genresSet = new Set(genresData); // eliminar repetidos
    this.setState({ moviesGenres: [...genresSet] });
  };

  toggleModal = () => this.setState(({ modalActive }) => ({ modalActive: !modalActive }));

  applyFilter = (genre) => {
    const { movies } = this.props;
    const filteredMovies = movies.filter((movie) =>
      movie.genres.includes(genre)
    );
    this.setState({ movies: filteredMovies, modalActive: false },
      () => {
        this.flatlist.scrollToOffset({ animated: true, offset: 0 })
      }
    );
  };

  render() {
    const { modalActive, moviesGenres, movies } = this.state;

    return (
      <>
        <FlatList
          ref={(ref) => (this.flatlist = ref)}
          style={styles.list}
          data={movies}
          keyExtractor={({ poster }) => poster}
          showsVerticalScrollIndicator={false}
          renderItem={({
            item: {
              posterurl,
              year,
              imdbRating,
              title,
              actors,
              storyline,
              genres
            }
          }) => {
            return (
              <MovieCard
                posterurl={posterurl}
                title={title}
                year={year}
                imdbRating={imdbRating}
                actors={actors}
                description={storyline}
                genres={genres}
              />
            );
          }}
        />
        <View style={styles.filterButton}>
          <FilterButton onPress={this.toggleModal} />
        </View>
        <Modal
          visible={modalActive}
          animationType="slide"
        >
          <Filters
            moviesGenres={moviesGenres}
            onPress={this.applyFilter}
          />
          <Button title="Cerrar Modal" onPress={this.toggleModal} />
        </Modal>
      </>
    );
  }
}
