import React from 'react';
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
        //justifyContent: 'space-between',
        //alignItems: 'center',
        marginVertical: 10,
    },
    scrollView: {
        flex: 1,
        backgroundColor: colors.lightGray,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerInfo: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    imageContainer: {
        // alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.lightGray, 
        height: 80, 
        width: 80 ,
    },
    image: {    
        //flex: 1,
        width: 64,
        height: 64,  
        // resizeMode: 'contain'   
    },
    titleText:{
        flex: 1,       
        backgroundColor: 'white', 
        flexDirection: 'column',
        flexWrap: 'wrap',
        paddingLeft: 10,
        
    },
    priceText:{
        flex: 1.5,
        alignItems: 'flex-end',
        backgroundColor: 'white',
        paddingTop: 6, 
        paddingRight: 10
    },
    bodyInfo: {
        flex: 1,
    }
});

const stylePrice = (percent_change) => {
    
    let color = percent_change >= 0 ? 'green' : 'red';
    
    return {
      color: color,
      fontWeight: 'bold',
      fontSize: 20,
    }
}

const valueColor = (percent_change) => {
    
    let color = percent_change >= 0 ? 'green' : 'red';
    
    return color;
}

const CurrencyInfo = ({navigation}) => {

    // const genresChip = moviesGenres.map((genre, index) => (
    //     <Chip
    //       pressable
    //       onPress={onPress}
    //       key={`genres-${index}`} value={genre}
    //     />
    // ));


    return (
        <SafeAreaView style={ styles.container }>   
            <Header/>           
            <ScrollView style={ styles.scrollView }>
                <View style={ styles.headerInfo }>
                    <View style={ styles.imageContainer }>
                        <Image 
                            source={ require('../assets/no_image_available.jpg') }
                            style={ styles.image }
                        />
                    </View>
                    <View style={ styles.titleText }>
                        <Text style={{ fontSize:25, fontWeight:'bold' }}>Ethereum</Text>
                        <View style={{backgroundColor:'blue', flexWrap:'wrap' }}>
                            <Chip value={ 'Rank# 2' } rank={ 2 } color={ true } />
                        </View>
                    </View>
                    <View  style={ styles.priceText }>
                        <Text style={{fontSize:15, fontWeight:'bold'}} >Precio actual (ETH)</Text>
                        <View style={{flexDirection:'row'}}>                            
                            <Text style={{color: 'black', fontSize: 20, fontWeight:'bold'}}>$5000</Text>
                            <Chip
                                value={ '13.18' } rank={ 0 } color={ true } textColor={valueColor(-1)}
                            />
                        </View>
                    </View>
                </View>
                <View>  
                    <Text style={{paddingLeft:10}}>Descripción</Text>
                    <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:50 }}>
                        <Text style={styles.description}>texto descriptivo</Text>
                    </View>   
                    <Text style={{paddingLeft:10}}>Tags</Text>
                    <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:50, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Chip value={ 'Tag 1' } rank={ 0 } color={ true } textColor={'white'} />
                        <Chip value={ 'Tag 2' } rank={ 0 } color={ true } textColor={'white'} />
                    </View>
                </View>
            {/* <OverlaySpinner
                color={colors.white}
                textContent="Cargando información..."
                textStyle={styles.overlayStyle}
                visible={false}
            /> */}
                           
                {/* <View style={{backgroundColor: colors.lightGray}}>
                   
                </View> 
                <View style={styles.viewHeaderList}>
                                         
                </View>   */}                              
            </ScrollView>
            <View>
                <Button title="Volver atrás" onPress={() => navigation.pop()} />
            </View>  
        </SafeAreaView>        

    );

}

export default CurrencyInfo;



