import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MenuContent from '../screens/Menu/MenuContent';
import HomeNavigation from './HomeStack';
import Profile from '../screens/Profile';
import {connect} from 'react-redux';
import {logout, profile} from '../redux/actions';

const styles = StyleSheet.create({
  drawerContainer: {
      flex: 1,  
  },
});

const MenuDrawer = createDrawerNavigator();

const DrawerNavigator = ({userName, userMail, userPhone, userPhoto, logout}) => (  
  <MenuDrawer.Navigator
    drawerStyle={styles.drawerContainer}
    drawerContent={MenuContent}
    drawerContentOptions={{
      logout:logout,
      userName: userName, 
      userMail: userMail, 
      userPhone: userPhone, 
      userPhoto: userPhoto,
    }}>
    <MenuDrawer.Screen name="Home" component={HomeNavigation} />   
    <MenuDrawer.Screen name="Profile" component={Profile} /> 
  </MenuDrawer.Navigator>
  
);

const mapDispatchToProps = dispatch => {
    return {        
        logout: () => dispatch(logout()),
        profile: (nombre, correo, telefono, filePath) => dispatch(profile({nombre, correo, telefono, filePath})),
    };
};

const mapStateToProps = globalState => {
  return {
      userName: globalState.profileReducer.nombre,
      userMail: globalState.profileReducer.correo,
      userPhone: globalState.profileReducer.telefono,
      userPhoto: globalState.profileReducer.filePath,
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
