import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FullMovie from '../screens/FullMovie';
import Home from '../screens/Home';
import movies from '../lib/movies.json';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">     
      <RootStack.Screen name="Home" component={Home}  initialParams={{movies}} />
      <RootStack.Screen name="FullMovie" component={FullMovie} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;