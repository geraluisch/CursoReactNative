import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const goldColor = '#f1c40f';
const grayColor = '#95a6a6';
const redColor = '#e74c3c';

const styles = StyleSheet.create({
  starContainer: {
    marginVertical: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#95a5a6',
  },
  heart: {
    padding: 5,
  },
});

// export default class Rating extends Component {
//   render() {
//     const {
//       star,
//       starNumber = 5,
//       starRating,
//       onRatingPress = () => { },
//       heart,
//       like,
//     } = this.props;

//     if (star) {
//       const starTotalNumber = Array.from({ length: starNumber })
//         .map((_, index) => (
//           <TouchableHighlight
//             key={`star-${index}`}
//             underlayColor="transparent"
//             onPress={() => onRatingPress(index + 1)}
//           >
//             <Icon
//               name="star"
//               size={30}
//               color={index < starRating ? goldColor : grayColor}
//             />
//           </TouchableHighlight>
//         ))

//       return (
//         <View style={styles.starContainer}>
//           {starTotalNumber}
//         </View>
//       )
//     }

//     if (heart) {
//       return (
//         <TouchableOpacity
//           onPress={onRatingPress}
//           style={styles.heart}
//         >
//           <Icon name="heart" size={30} color={like ? redColor : grayColor} />
//         </TouchableOpacity>
//       )
//     }

//     return null;
//   }
// }

const Rating = ({
  star,
  starNumber = 5,
  starRating,
  onRatingPress = () => {},
  heart,
  like,
}) => {
  Icon.loadFont();
  if (star) {
    const starTotalNumber = Array.from({ length: starNumber }).map(
      (_, index) => (
        <TouchableHighlight
          key={`star-${index}`}
          underlayColor="transparent"
          onPress={() => onRatingPress(index + 1)}>
          <Icon
            name="star"
            size={30}
            color={index < starRating ? goldColor : grayColor}
          />
        </TouchableHighlight>
      ),
    );

    return <View style={styles.starContainer}>{starTotalNumber}</View>;
  }

  if (heart) {
    return (
      <TouchableOpacity onPress={onRatingPress} style={styles.heart}>
        <Icon name="heart" size={30} color={like ? redColor : grayColor} />
      </TouchableOpacity>
    );
  }

  return null;
};

export default Rating;
