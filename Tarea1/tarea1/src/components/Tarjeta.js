import React, { Component }  from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Text,
    View,
  } from 'react-native';
  
const styles = StyleSheet.create({
  content: {   
    flex: 1,
    flexDirection: 'column',    
    backgroundColor: '#95a5a6',    
  },
  viewH: {    
    flex:2,
    flexDirection:  'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 20,   
  },
  viewTitle: {
    flex: 1,
    paddingLeft:20,
  },
  viewParrafo: {
    flex: 9,
    paddingLeft:20
  },
  textNombre: {
    paddingTop: 20,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },  
  textEdad: {
    color: 'white',
    fontSize: 20
  },
  textTitle: {
    color: '#7f8c8d',
    fontSize: 20,
    
  },  
  imagen: {
    width:100,
    height:100,
    borderRadius:50,  
  },
  parrafo: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  textParrafo: {
    flex: 1, 
    textAlign:'justify',
    paddingRight: 10, 
    fontSize: 20
  }


});

const Imagen= () => <Image
                      source={{ uri: 'https://picsum.photos/seed/picsum/200' }}
                      style={ styles.imagen } 
                    />;

class Tarjeta extends Component {
    render() {
        return (
          <SafeAreaView style={ styles.content } >
            <View style={ styles.viewH } >
              <View>
                <Text style={ styles.textNombre } >Luis Chourio</Text>
                <Text style={ styles.textEdad } >34</Text>
              </View>          
              <Imagen/>
            </View>
            <View style={ styles.viewTitle } >
              <Text style={ styles.textTitle } >Bio:</Text>
              <Text style={{ fontSize: 20 }} >Desarollador Informático</Text>
            </View>  
            <View style={ styles.viewParrafo } >
              <Text style={ styles.textTitle } >Descripción:</Text>    
              <View style={ styles.parrafo }>            
                <Text style={ styles.textParrafo }> Quisque feugiat urna pellentesque nibh luctus, ac euismod dui commodo. Cras lobortis dolor tortor, eget dictum libero consectetur eget. Ut eget pretium mauris, eget dictum ligula. Nulla nulla mauris, malesuada in aliquam vel, pulvinar non lectus.</Text>
                <Text style={ styles. textParrafo }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia malesuada nisl, in tincidunt odio aliquam quis. Duis quis libero mi. Aliquam cursus accumsan vulputate. Maecenas a laoreet purus, sit amet luctus justo.</Text>
              </View>
            </View>      
          </SafeAreaView>
          
        );
      }

}

Tarjeta.displayName = 'Tarjeta';

export default Tarjeta;