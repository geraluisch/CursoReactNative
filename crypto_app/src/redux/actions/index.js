import AsyncStorage from '@react-native-async-storage/async-storage';

const cryotoAppAsyncStorageUser = 'cryptoAppUserName';
const cryotoAppAsyncStorageKey = 'cryptoAppProfile';

export const login = ({user, password}) => {
    return dispatch => {
        dispatch({
            type: 'LOADING',
            isLoading: true,
        });

        setTimeout(() => {
            if(user === 'luig' && password === '123456') {
                AsyncStorage.setItem('user', user);
                AsyncStorage.setItem('password', password);

                dispatch({
                    type: 'LOGIN_IN',                    
                });
            }

            dispatch({
                type: 'LOADING',
                isLoading:false,
            })
            
        }, 2000);       
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
};

export const profile = ({nombre, correo, telefono, filePath}) => {
    return dispatch => {
        dispatch({
            type: 'SAVE_PROFILE',
            nombre: nombre,
            correo: correo,
            telefono: telefono,
            filePath: filePath,
        });
        AsyncStorage.setItem('nombre',nombre);
        AsyncStorage.setItem(cryotoAppAsyncStorageKey,JSON.stringify({nombre: nombre, correo: correo, telefono: telefono, filePath: filePath,}));
        
    };
};



