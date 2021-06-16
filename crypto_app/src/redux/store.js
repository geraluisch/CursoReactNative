import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const cryotoAppAsyncStorageKey = 'cryptoAppProfile';

const composedEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store= createStore(reducers, composedEnhancers(applyMiddleware(thunk)));

const getAsyncStorage = () => {

  return (dispatch) => {
    try {
      AsyncStorage.getItem(cryotoAppAsyncStorageKey)
      .then((result) => {      
        let dataProfile = JSON.parse(result);
    
        dispatch({
          type: 'SET_INIT',
          nombre: dataProfile['nombre'],
          correo: dataProfile['correo'],
          telefono: dataProfile['telefono'],
          filePath: dataProfile['filePath'],
        });   
  
      });      
    } catch (error) {
      console.log(error);
    }
  };
};

store.dispatch(getAsyncStorage());

export default store;




