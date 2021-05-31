import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import CurrencyInfo from '../screens/CurrencyInfo';

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
    <HomeStack.Navigator headerMode= "none">
        <HomeStack.Screen name="Home" component={ Home } />
        <HomeStack.Screen name="CurrencyInfo" component={ CurrencyInfo } />
    </HomeStack.Navigator>
)

export default HomeNavigator;