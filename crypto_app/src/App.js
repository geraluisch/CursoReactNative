import React, { useEffect } from 'react';
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import CryptoCurrencyHandler from './context/CryptoCurrenciesHandler';

const App = () => { 
  return (
    <>
      <Provider store={store}>
        <CryptoCurrencyHandler>
          <RootNavigation />
        </CryptoCurrencyHandler>
      </Provider> 
    </>
  );
};



export default App;
