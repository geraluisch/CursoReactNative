import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login as loginAction } from '../../redux/actions';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import colors from '../../config/colors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import OverlaySpinner from 'react-native-loading-spinner-overlay';


const styles = StyleSheet.create({
    safeAreaView: {
        flex:1,
        // backgroundColor: 'black'
    },  
    container: {
        flex:1, 
        backgroundColor:colors.white
    },
    inputContainer: {
        paddingTop: 10,       
        alignItems: 'center',      
    },
    image: {    
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'   
    },
    textInput:{       
        backgroundColor: colors.doge, 
        width: '80%',
        borderRadius: 20,
        marginTop: 15,
        color: colors.gold,
        fontSize: 18,
        padding:12,
        fontWeight: 'bold'
    },
    loginButton: {
        marginTop: 50,
        backgroundColor: colors.gold,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
        padding: 10,
    },
    loginButtonText: {
        fontSize: 20,
        marginRight: 5,
        color: colors.white,
    },
  });

const Login = ({isLoadingActive, loginIn, valid}) => {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
      
    AntIcon.loadFont();

    const loginCallback = () => {
        if (userName && userPassword) {
            loginIn(userName, userPassword);
        }
    };

    return (
        <>
            <OverlaySpinner visible={isLoadingActive} color={colors.white} />
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/logo_app_3.jpg')}
                    />
                </View>
                <View style={[styles.container, styles.inputContainer]}>
                    <TextInput
                        placeholder='Usuario'
                        autoCapitalize='none'
                        style={styles.textInput} 
                        placeholderTextColor = {colors.gold}
                        onChangeText={name => setUserName(name)}                                   
                    />
                    <TextInput
                        placeholder='Password'
                        autoCapitalize='none'
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor = {colors.gold}  
                        onChangeText={password => setUserPassword(password)}
                    />
                    <TouchableOpacity
                        onPress={() => loginCallback()}
                        style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Ingresar</Text>                   
                        <AntIcon name="login" color={colors.white} size={20} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>        
    );

}

const mapDispatchToProps = dispatch => {
    return {
        loginIn : (user, password) => dispatch(loginAction({user, password})),
    }
}

const mapStateToProps = globalState => {
    return {
        isLoadingActive: globalState.loginReducer.loading,
        valid: globalState.loginReducer.valid
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

