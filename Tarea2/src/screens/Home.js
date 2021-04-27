import React, { PureComponent } from 'react';
import { Button, Text } from 'react-native';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';

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

const Home = ({ movies = [] }) => (
  <>
    <Header title="La Cartelera" />
    <MoviesList movies={movies} />
  </>
);

export default Home;
