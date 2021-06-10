import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuContent from '../screens/Menu/MenuContent';
import HomeNavigation from './HomeStack';
import Profile from '../screens/Profile';

const styles = StyleSheet.create({
  drawerContainer: {
      flex: 1,
    // marginVertical: 100,
    // padding: 5,
    // borderRadius: 10,
  },
});

const MenuDrawer = createDrawerNavigator();

const DrawerNavigator = props => (
  <MenuDrawer.Navigator
    drawerStyle={styles.drawerContainer}
    drawerContent={MenuContent}>
    <MenuDrawer.Screen name="Home" component={HomeNavigation} />   
    <MenuDrawer.Screen name="Profile" component={Profile} /> 
  </MenuDrawer.Navigator>
);

export default DrawerNavigator;
