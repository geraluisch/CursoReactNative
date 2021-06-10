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
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    touchableOpacity: {
       paddingLeft: 4,
    },
    viewTitle: {        
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title: {
        color: colors.gold,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 2,
        paddingRight: 14,
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <MaterialIcon name="menu" color={colors.gold} size={40}/>
                </TouchableOpacity>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>CRYPTO APP</Text>
                </View>                
            </SafeAreaView>
        );
    }
}

export default Header;