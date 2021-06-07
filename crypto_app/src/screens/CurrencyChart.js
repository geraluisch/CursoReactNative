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
    Dimensions,
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
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


const CurrencyChart = ({navigation}) => {
    // const {
    //     states,
    //     isLoading,
    // } = useContext(CryptoCurrencyContext);

    // const {  
    //     id,
    //     name,
    //     slug,
    //     rank,
    //     quote,
    //     logo,
    //     symbol,
    //     description,
    //     tags,
    //     urls,
    // }  = states;




    return (
        <SafeAreaView style={ styles.container }>           
            <Header/>         
                 <ScrollView style={ styles.scrollView }>

                <View style={{ padding:10 }}>
                    <Text>Gráfico de </Text>
                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={250}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: 'red',//"#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                </View>               
            </ScrollView>
            <View>
                <TouchableOpacity style={{ backgroundColor: colors.doge, flexDirection:'column', alignContent:'center', alignItems:'center', height:40 }} onPress={() => navigation.pop()}>
                    <Text style={{ color: colors.gold, fontSize:20, fontWeight:'bold',  paddingTop:6   }}>Volver atrás</Text>
                </TouchableOpacity>
            </View>  
        </SafeAreaView>        

    );

}

export default CurrencyChart;



