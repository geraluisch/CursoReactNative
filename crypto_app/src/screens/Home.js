import React, { useState, useContext, useCallback, useEffect } from 'react';
import {
    Button,
    View, 
    Text, 
    TextInput,
    SafeAreaView, 
    StyleSheet,
    RefreshControl,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Dimensions,
    LogBox } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showMessage } from 'react-native-flash-message';
import Header from '../components/Header';
import Input from '../components/Input';
import OverlaySpinner from 'react-native-loading-spinner-overlay';
import colors from '../config/colors';
import axios from 'axios';
import { CryptoCurrencyContext } from '../contexts/CryptoCurrencyHandler';
import { getLastCurrencies } from '../config/constants';

const styles = StyleSheet.create({
    container : {
        flex: 1,       
    },
    overlayStyle: {
        color: colors.white,
    },
    viewHeaderList : {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        backgroundColor: colors.gold,
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
      },
});

const { height } = Dimensions.get('window');

// const wait = (timeout) => {
//     return new Promise(resolve => setTimeout(resolve, timeout));
// }

const Home = () => {
    const [currencies, setCurrencies] = useState([]);
    const [searchCurrency, setSearchCurrency] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    console.log('aca');
    const { //states, 
            // isLoading, 
            fetchDataByCurrency 
    } = useContext(CryptoCurrencyContext);

    //console.log('aca 2-------------------', states);
    
    useEffect(() => { LogBox.ignoreLogs(['VirtualizedLists should never be nested']); }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // //wait(2000).then(() => setRefreshing(false));
        fetchCurrencies(true);
    }, []);

    const fetchCurrencies = async (refresh) => {
        const { data, status } = await axios.get(
            getLastCurrencies,
        )
        .catch(error => console.log(error));    

        if(status === 200) {
            showMessage({
                message: 'Cripto-monedas optenidas',
                type: 'success',
            });

            setCurrencies(data.data);
            setSearchCurrency(data.data);            

            setRefreshing(false);           
        }   
    };
    
    const filterCurrencies = useCallback(
        searchText => {
            if(searchText) {
               
                const result = currencies.filter(({ slug }) =>
                    slug.includes(searchText.toLowerCase())
                ); 
                setSearchCurrency(result);
            } else {
                setSearchCurrency(currencies);
            }
        },
        [currencies]
    );

    useEffect(() => {
        fetchCurrencies(false);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView 
                    style={{ backgroundColor:'blue' }}                
                    refreshControl={
                        <RefreshControl
                            refreshing={ refreshing }
                            onRefresh={ onRefresh }
                        />
                    }
                >
                {/* <OverlaySpinner
                    color={colors.white}
                    textContent="Cargando información..."
                    textStyle={styles.overlayStyle}
                    visible={isLoading}
                />  */}
                    <Header/>             
                    <View style={{backgroundColor:'white'}}>
                        <Input                   
                            placeholder="Buscar cripto-moneda..." 
                            placeholderTextColor={colors.white} 
                            onChangeText={ filterCurrencies }              
                        />
                    </View> 
                    <View style={styles.viewHeaderList}>
                        <Text style={styles.textHeader} >Name</Text> 
                        <Text style={styles.textHeader}>Price</Text>  
                        <Text style={styles.textHeader}>Market Cap</Text>                       
                    </View>                                 
                </ScrollView>  
            </View>
            <View style={{ flex: 1 }}>
                    <FlatList
                        style={{ backgroundColor: '#eee' }}
                        data={searchCurrency}                      
                        keyExtractor={({ slug }) => slug}
                        renderItem={({ item: {id, name, symbol, slug, quote, cmc_rank },index }) => {                            
                            const style = index % 2 === 0 ? { backgroundColor: '#fff' } : null;
                            const {
                                USD : {
                                    price,
                                    market_cap
                                }
                            } = quote;                          
                            return (
                            <TouchableOpacity
                                style={{
                                ...style,
                                paddingLeft: 5,
                                paddingRight: 5,
                                height: height / 14,                              
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent:'space-between' 
                                }}
                                onPress={() => {                                    
                                    fetchDataByCurrency(id, name, slug, cmc_rank, quote);                                    
                                    navigation.navigate('CurrencyInfo');
                                }}
                            >
                                <Text style={{ fontSize: 12, minWidth:90 }}>{ slug }</Text>
                                <Text style={{ fontSize: 12, minWidth:80,textAlign:'right'}}>$ { price.toFixed(2)  }</Text>
                                <Text style={{ fontSize: 12, minWidth:120,textAlign:'right'}}>$ { market_cap.toFixed(2)  }</Text>                                                          
                            </TouchableOpacity>
                            );
                        }}
                    />
                </View>              
        </SafeAreaView>
    );
};

export default Home;

