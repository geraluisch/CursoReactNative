import React from 'react';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// export default class Home extends PureComponent {
//   render() {
//     const { movies } = this.props;
//     return (
//       <>
//         <Header title="La Cartelera" miArray={['hola', 'chao']} />
//         <MoviesList movies={movies} />
//       </>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
  },
});

const Home = ({ /*movies = []*/ route }) => {

  const { movies } = route.params;

  return(
    <SafeAreaView style={styles.container}>
      <Header title="La Cartelera" />
      <MoviesList movies={movies} />
    </SafeAreaView> 
  )
};

export default Home;
