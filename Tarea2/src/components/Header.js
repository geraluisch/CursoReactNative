import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#bdc3c7',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#34495e',
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

// export default class Header extends PureComponent {
//   render() {
//     const { title } = this.props;
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>{title}</Text>
//       </View>
//     )
//   }
// }

const Header = ({ title = 'Mi Cartelera' }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propType = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Sin Header',
};

export default Header;
