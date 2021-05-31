import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,  } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.doge,
        height: 40,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    touchableOpacity: {
       paddingRight:5
    },
    viewTitle: {        
        //flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color: colors.gold,
        fontSize: 23,
        fontWeight: 'bold',
        paddingBottom: 6,
        paddingLeft:24
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Crypto App</Text>
                </View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <MaterialIcon name="menu" color={colors.gold} size={40}/>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default Header;