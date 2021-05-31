import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import LoginNavigator from './LoginStack';
import HomeNavigator from './HomeStack';

const RootStack = createStackNavigator();

const RootNavigation = ({isValidLogin}) => (
    <NavigationContainer>
        <RootStack.Navigator headerMode="none">
            {!isValidLogin ? (
                <RootStack.Screen name="LoginNavigator" component={LoginNavigator}/>                
            ) : (
                <RootStack.Screen name="HomaNavigator" component={HomeNavigator}/>
            )}
        </RootStack.Navigator>
    </NavigationContainer>
);

const mapStateToProps = globalState => {
    return {
        isValidLogin: globalState.loginReducer.valid,
    };
}

export default connect(mapStateToProps)(RootNavigation);