import React, { useState, createContext, useReducer } from 'react';
import axios from 'axios';
import { getCurrencyInfo, getCurrencyFlow } from '../config/constants';
import { meses } from '../config/constants';
// import { max } from 'react-native-reanimated';

export const CryptoCurrencyContext = createContext();

const cryptoCurrencyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRENCY': {
            return {
                ...state,
                id: action.id,
                name: action.name,
                slug: action.slug,               
                rank: action.rank,
                quote: action.quote,
            };
        }
        case 'ADD_CURRENCY_DATA': 
            return {
                ...state,
                ...action.currencyData,
            };          
        case 'ADD_CURRENCY_FLOW':
            return {
                ...state,
                chartLabels: action.chartLabels,
                chartData: action.chartData,
            }
        case 'CLEAN_DATA':
            return {
                ...state,
                logo: null,
                symbol: null,
                description: null,
                tags: [],
                urls: null,
                chartLabels: [],
                chartData: [],
            };
        default:
            return state;
    }
};

const defaultState = {
   id: null,
   name: null,
   slug: null,
   rank: null,
   quote: null,
   logo: null,
   symbol: null,
   description: null,
   tags: [],
   urls: null,
   chartLabels: [],
   chartData: [],
};

const CryptoCurrencyHandler = ({ children }) => {
    const [states, dispatch] = useReducer(cryptoCurrencyReducer, defaultState);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [isLoadingDataFlow, setIsLoadingDataFlow] = useState(false);

    const fetchDataByCurrency = async (currencyId, currencyName, currencySlug, currencyRank, currencyQuote) => {
        setIsLoadingData(true);      

        dispatch({
            type: 'CLEAN_DATA',
        });

        try {
            const { data, status } = await axios.get(
                getCurrencyInfo(currencySlug),
            );
            
            if( status === 200) {
                dispatch({
                    type: 'ADD_CURRENCY',
                    id: currencyId,
                    name: currencyName,
                    slug: currencySlug,                    
                    rank: currencyRank,
                    quote: currencyQuote,
                });

                const dataJson = data.data[`${currencyId}`];
                const { symbol,
                        category,
                        description,
                        logo,
                        tags,
                        urls,
                    } = dataJson;               

                const currencyData = {
                    logo: logo,
                    symbol: symbol,
                    description: description,
                    tags: tags,
                    urls: urls,
                }            

                dispatch({
                    type: 'ADD_CURRENCY_DATA',
                    currencyData,
                });                
            }
        
            setIsLoadingData(false);          
            return;
        } catch (error) {
            console.log('Error: ', error );
            setIsLoadingData(false);
        }       
    };

    const fetchDataByCurrencyFlow = async (currencySymbol) => {
        setIsLoadingDataFlow(true);          

        try {
            const { data, status } = await axios.get(
                getCurrencyFlow(currencySymbol),
            );
            
            if( status === 200) {           
                
               const flow = data['Time Series (Digital Currency Monthly)'];

                let dateFlow = [];
                let dataFlow = [];
                let mes = [];
                let maxData = 0;

                for(let date in flow) {
                    if(maxData >= 5) 
                        break;
                    maxData += 1;
                    mes = date.split('-',3);
                    dateFlow.push(meses[mes[1]]);
                    dataFlow.push(parseFloat(flow[date]['4b. close (USD)']))
                }                 

                dispatch({
                    type: 'ADD_CURRENCY_FLOW',
                    chartLabels: dateFlow,
                    chartData: dataFlow,
                });                
            }
        
            setIsLoadingDataFlow(false);            
            return;
        } catch (error) {
            console.log('Error: ', error );
            setIsLoadingDataFlow(false);
        }       
    };
    
    return (
        <CryptoCurrencyContext.Provider
            value={{
                isLoadingData,
                isLoadingDataFlow,
                fetchDataByCurrency,
                fetchDataByCurrencyFlow,
                states,
            }}>           
            { children }
        </CryptoCurrencyContext.Provider>
    );
};

export default CryptoCurrencyHandler;