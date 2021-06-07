import React, { useContext, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
    Button,    
} from 'react-native';
import colors from '../config/colors';
import Header from '../components/Header';
import Chip from '../components/Chip';
import TagList from '../components/CurrencyInfo/TagList';
import { useNavigation } from '@react-navigation/core';
import { CryptoCurrencyContext } from '../contexts/CryptoCurrencyHandler';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import SimpleIcon from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
    container : {
        flex: 1,       
    },
    overlayStyle: {
        color: colors.white,
    },   
    textHeader: {
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    currencyContainer: {        
        marginVertical: 10,
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.lightGray,        
    },
    headerInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    imageContainer: {       
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.lightGray, 
        height: 80, 
        width: 80 ,
    },
    image: {        
        width: 64,
        height: 64,           
    },
    titleText:{
        flex: 1,       
        backgroundColor: 'white', 
        flexDirection: 'column',
        alignItems: 'center',
        //flexWrap: 'wrap',
        //paddingLeft: 10,
        
    },
    priceText:{
        flex: 1.5,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 6, 
        paddingRight: 10
    },
    bodyInfo: {
        flex: 1,
    },
    graphButton: {
        margin: 5,
        backgroundColor: colors.gold,
        //flexDirection: 'row',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent:  'center',
        //alignContent: 'center',
        flex: 1,
        height:60
        //padding: 50,
    },
    graphButtonText: {
        fontSize: 20,
        marginRight: 10,
        color: colors.white,
    },
    description:{
        textAlign:'justify',
        fontSize:15,
        margin:10,
    },  
});

// const stylePrice = (percent_change) => {
    
//     let color = percent_change >= 0 ? 'green' : 'red';
    
//     return {
//       color: color,
//       fontWeight: 'bold',
//       fontSize: 20,
//     }
// }

const valueColor = (percent_change) => {
    
    let color = percent_change >= 0 ? 'green' : 'red';   
    
    return color;
}

const rankColor = (rankVelue) => { 
    switch (rankVelue) {
      case 1:
      case 2: return  colors.yellowGold;
      case 3:
      case 4: return  colors.copper;
      default: return  colors.gray;     
    }
  }

const CurrencyInfo = ({navigation}) => {
    const {
        states,
        isLoading,
    } = useContext(CryptoCurrencyContext);

    const {  
        id,
        name,
        slug,
        rank,
        quote,
        logo,
        symbol,
        description,
        tags,
        urls,
    }  = states;

    // console.log('quoteeeeeee:   ',quote);

    // const {
    //     USD : {
    //         price,
    //         volume_24h,
    //         percent_change_1h,
    //     }
    // } = quote;

    // const up_down = percent_change_1h >= 0 ? '▲' : '▼';
   
    // console.log(percent_change_1h);

    // const genresChip = moviesGenres.map((genre, index) => (
    //     <Chip
    //       pressable
    //       onPress={onPress}
    //       key={`genres-${index}`} value={genre}
    //     />
    // ));

    // const name = 'Ethereum';
    // const rank = 2;
    // const symbol = 'ETH';
    //const price = 10000;
    //const percent_change_1h = 100;


    return (
        <SafeAreaView style={ styles.container }>           
            <Header/>         
            {  
                isLoading   ?
                (
                    <OverlaySpinner
                        color={colors.white}
                        textContent="Cargando información..."
                        textStyle={styles.overlayStyle}
                        visible={true}
                    /> 
                )
                            :
                (
                    <>
                        <ScrollView style={ styles.scrollView }>
                            <View style={ styles.headerInfo }>
                                <View style={ styles.imageContainer }>
                                    <Image 
                                        //source={ require('../assets/no_image_available.jpg') }
                                        source={ { uri: logo } }
                                        style={ styles.image }
                                    />
                                </View>
                                <View style={ styles.titleText }>
                                    <Text style={{ fontSize:25, fontWeight:'bold' }}>{ name }</Text>
                                    <View style={{ flexWrap:'wrap' }}>
                                        <Chip value={ `Rank# ${ rank }` } color={ rankColor(rank) } textColor={'white'} />
                                    </View>
                                </View>                    
                            </View>
                            <View>  
                                <View style={{ flex:1, flexDirection:'row',  }}>                        
                                    <View  style={ styles.priceText }>
                                        <Text style={{fontSize:18, fontWeight:'bold'}} >Precio actual ({ symbol })</Text>
                                        <View style={{flexDirection:'row', alignItems: 'center', paddingTop:5}}>                            
                                            <Text style={{color: 'black', fontSize: 20, fontWeight:'bold'}}>${ quote.USD.price.toFixed(0) }</Text>
                                            <Chip
                                                value={ `${quote.USD.percent_change_1h >= 0 ? '▲' : '▼'} ${ quote.USD.percent_change_1h.toFixed(2) }%`  } color={ valueColor( quote.USD.percent_change_1h ) } textColor={'white'}
                                            />
                                        </View>
                                    </View>
                                    
                                    <View style={{ flex: 1, flexDirection:'row', alignContent:'center', alignItems:'center' }}>
                                    <TouchableOpacity
                                            onPress={() => navigation.navigate('CurrencyChart')
                                            }
                                            style={styles.graphButton}>
                                            {/* <Text style={styles.graphButtonText}>Grafico</Text>                    */}
                                            <SimpleIcon name='graph' color={ colors.white } size={ 20 } />
                                    </TouchableOpacity> 
                                      
                                    </View>
                                </View>
                                        
                                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Descripción</Text>
                                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                                    <Text style={styles.description}>{ description }</Text>
                                </View>   
                                <Text style={{paddingLeft:10, fontSize:18, fontWeight:'bold'}} >Tags</Text>
                                <View  style={{  margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:50, flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <TagList tags={ JSON.parse(JSON.stringify(tags)) } />
                                </View>
                            </View>                   
                        </ScrollView>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: colors.doge, flexDirection:'column', alignContent:'center', alignItems:'center', height:40 }} onPress={() => navigation.pop()}>
                                <Text style={{ color: colors.gold, fontSize:20, fontWeight:'bold',  paddingTop:6   }}>Volver atrás</Text>
                            </TouchableOpacity>
                        </View>
                    </>  
                )
            }
           
        </SafeAreaView>        

    );

}

export default CurrencyInfo;



