import React, { useState, createContext, useReducer } from 'react';

export const CryptoCurrencyContext = createContext();

const cryptoCurrencyReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CURRYNCY_LIST':
            return {
                currencies: action.currencies,
            };
        case 'CLEAN_DATA':
            return {
                currencies: [],
            };
        default:
            return state;
    }
};

const defaultState = {
   currencies: [],     
};

const CryptoCurrencyHandler = ({ children }) => {
    const [states, dispatch] = useReducer(cryptoCurrencyReducer, defaultState);
    const [isLoading, updateIsLoading] = useState(false);

    // const fetchDataCurrencies = async () => {
       
    // };
    
    return (
        <CryptoCurrencyContext.Provider
            value={{}}
        >           
            { children }
        </CryptoCurrencyContext.Provider>


    );
}

export default CryptoCurrencyHandler;