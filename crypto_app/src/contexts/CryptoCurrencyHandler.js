import React, { useState, createContext, useReducer } from 'react';
import axios from 'axios';
import { getCurrencyInfo } from '../config/constants';

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
        
        case 'CLEAN_DATA':
            return {
                ...state,
                logo: null,
                symbol: null,
                description: null,
                tags: [],
                urls: null,
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
};

const CryptoCurrencyHandler = ({ children }) => {
    const [states, dispatch] = useReducer(cryptoCurrencyReducer, defaultState);
    const [isLoading, setIsLoading] = useState(false);

    const fetchDataByCurrency = async (currencyId, currencyName, currencySlug, currencyRank, currencyQuote) => {
        setIsLoading(true);

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

                console.log('quote2--------',currencyQuote);
                console.log('currencyData--------',currencyData);


                setIsLoading(false);
                return;
            }
        
            setIsLoading(false);
        } catch (error) {
            console.log('Error: ', error );
            setIsLoading(false);
        }       
    };
    
    return (
        <CryptoCurrencyContext.Provider
            value={{
                isLoading,
                fetchDataByCurrency,
                states,
            }}>           
            { children }
        </CryptoCurrencyContext.Provider>
    );
};

export default CryptoCurrencyHandler;