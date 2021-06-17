import React, {useState, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/core';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  contentContainerStyle, 
  ScrollView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,    
} from 'react-native';
import Header from '../components/Header';
import colors from '../config/colors';
import {connect} from 'react-redux';
import {profile} from '../redux/actions';


const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  imagen: {
    width:100,
    height:100,
    borderRadius:50,  
  },
  title: {
    paddingTop:10, 
    fontSize:25, 
    fontWeight:'bold'  
  },
  textInput:{       
    backgroundColor: colors.doge, 
    width: '90%',
    borderRadius: 20,
    marginTop: 5,
    color: colors.gold,
    fontSize: 18,
    padding:12,
    fontWeight: 'bold',    
  },
  infoContent: {
      flex: 1,
      backgroundColor: colors.lightGray,          
  }, 
  infoContainer: {         
      alignItems: 'center',       
  },  
  inputTitle:{    
    paddingTop:10, 
    fontSize:18, 
    fontWeight:'bold',      
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },  
});

const Profile = ({ userName, userMail, userPhone, userPhoto, profile }) => {

  const [nombre, setNombre] = useState(userName); 
  const [correo, setCorreo] = useState(userMail);
  const [telefono, setTelefono] = useState(userPhone);
  const [filePath, setFilePath] = useState(userPhoto);
  const navigation = useNavigation();

  const setFromStorage = () => {
    profile(nombre, correo, telefono, filePath);    
  };
  
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {   

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
     
      if( response.assets[0].uri !== '' )
        setFilePath(response.assets[0].uri);
      else 
        setFilePath('');      
    });
  };

  return ( 
    <SafeAreaView style={ styles.container }>
      <Header  navigation={navigation}/>  
      <ScrollView style={ styles.infoContent } contentContainerStyle={ styles.infoContainer }>
          <Text style={styles.title}>Perfil</Text>
          <TouchableOpacity style={{ paddingBottom:5 }} onPress={() => chooseFile('photo')}>
            <Image
              source={filePath !== '' ?  { uri: filePath } :   require('../assets/profile.jpg')}
              style={ styles.imagen } 
            />
          </TouchableOpacity>
          <View style={{flexDirection:'row'}}>         
            <TouchableOpacity style={ styles.button } onPress={() => setFilePath('')}>
              <Text>Quitar Imagen</Text>  
            </TouchableOpacity>  
          </View>       
          <Text style={ styles.inputTitle }>Nombre</Text>
          <TextInput
            placeholder='Nombre...'
            value={nombre}
            style={styles.textInput} 
            onChangeText={nuevoNombre => setNombre(nuevoNombre)}
            autoCapitalize='words'
            placeholderTextColor = {colors.gold}
          />       
          <Text style={ styles.inputTitle }>Correo</Text>
          <TextInput
            placeholder='Email...'
            value={correo}
            onChangeText={nuevoCorreo => setCorreo(nuevoCorreo)}
            keyboardType='email-address'
            style={styles.textInput} 
            autoCorrect={false}
            autoCapitalize='none'
            placeholderTextColor = {colors.gold}
          />       
          <Text style={ styles.inputTitle }>Teléfono</Text>
          <TextInput
            placeholder='Número teléfonico...'
            value={telefono}
            onChangeText={nuevoTelefono => setTelefono(nuevoTelefono)}
            keyboardType='phone-pad'
            style={styles.textInput} 
            autoCorrect={false}
            autoCapitalize='none'
            placeholderTextColor = {colors.gold}
          />          
      </ScrollView>
      <View>
        <TouchableOpacity style={{ backgroundColor: colors.doge, flexDirection:'column', alignContent:'center', alignItems:'center', height:40 }} onPress={() => setFromStorage()}>
            <Text style={{ color: colors.gold, fontSize:20, fontWeight:'bold',  paddingTop:6   }}>Guardar Datos</Text>
        </TouchableOpacity>
      </View>   
    </SafeAreaView>
  );
};

const mapStateToProps = globalState => {
  
  return {
      userName: globalState.profileReducer.nombre,
      userMail: globalState.profileReducer.correo,
      userPhone: globalState.profileReducer.telefono,
      userPhoto: globalState.profileReducer.filePath,
  };
}

const mapDispatchToProps = dispatch => {
  return {        
      profile: (nombre, correo, telefono, filePath) => dispatch(profile({nombre, correo, telefono, filePath})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

