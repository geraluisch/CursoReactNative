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


const CurrencyChart = ({
    navigation,  
    route: {
        params: {
            labels,
            data,
            valores,
        },
  },
}) => {  

    const {
        price,
        volume_24h,
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        percent_change_30d,
        percent_change_60d,
        percent_change_90d,
        market_cap,
    } = valores;
   
    return (
        <SafeAreaView style={ styles.container }>           
            <Header/>         
            <ScrollView style={ styles.scrollView }>
                <View style={{ padding:10 }}>
                    <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Gráfico Precios vs Tiempo</Text>
                    <LineChart
                        data={{
                        labels: labels.reverse(),
                        datasets: [
                            {
                                data: data.reverse()                              
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width - 20} 
                        height={250}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} 
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: 'red',//"#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, 
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
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Precio Actual</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>$ { price }</Text>
                </View>  
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Volumen en 24h</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>$ { volume_24h }</Text>
                </View>               
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 1h</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_1h }</Text>
                </View>               
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 24h</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_24h }</Text>
                </View>               
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 7d</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_7d }</Text>
                </View>               
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 30d</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_30d }</Text>
                </View>      
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 60d</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_60d }</Text>
                </View>      
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Porcentaje de Cambio en 90d</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>{ percent_change_90d }</Text>
                </View>      
                <Text style={{ paddingLeft:10, paddingTop:10, fontSize:18, fontWeight:'bold'  }}>Market Cap</Text>
                <View  style={{ margin: 10, backgroundColor: "white", borderRadius:8, marginBottom:10 }}>
                    <Text style={styles.description}>$ { market_cap }</Text>
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



