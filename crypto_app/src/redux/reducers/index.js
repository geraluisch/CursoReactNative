import { combineReducers } from 'redux';
import loginReducer from './login';
import profileReducer from './profile';

const reducers = combineReducers({
    loginReducer,
    profileReducer,
});

export default reducers;