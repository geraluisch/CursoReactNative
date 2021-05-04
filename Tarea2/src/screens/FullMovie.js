import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',  
  },
  text: {  
    marginBottom:5,
    fontSize: 25,
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  image: {
    height: 600,
    width: '100%',
  },
  scrollView: {
    marginLeft: 10,
    marginRight: 10   
  },
  description:{
    textAlign:'justify',
    margin: 10,   
    fontSize: 15, 
   
  }
});

const FullMovie = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  console.log(routes.params.posterurl)
  Icon.loadFont();

  const printActors = (actors) => {

    let actorList = '';
    
    actors.forEach((element, index, arry) => {
      actorList = `${actorList}${element}`;
      if(arry.length > index+1 )
        actorList = `${actorList}, `;     
    });

    return actorList;
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Icon
          style={{ paddingLeft: 3 }}
          name="arrow-left"
          size={40}
          color="white"
          onPress={()=>navigation.navigate('Home')}
        />
      </View> 
      <ScrollView >
        <ScrollView style={styles.scrollView}  horizontal={true} showsHorizontalScrollIndicator={false} >
          <Text style={styles.text}> 
            {
              printActors(routes.params.actors)
            }              
          </Text>
        </ScrollView>
        <Image       
          source={
            routes.params.validImage
              ? {uri: routes.params.posterurl} 
              : require('../assets/no_image_available.jpg')
          }
          style={styles.image}
        />
        <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:50 }}>
          <Text style={styles.description}>{routes.params.description}</Text>
        </View>    
        
    </ScrollView>
    </SafeAreaView>   
  );
};

export default FullMovie;