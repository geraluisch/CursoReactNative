import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button } from 'react-native';

const styles = StyleSheet.create({
    btn: {
        color: 'blue',
        //textAlign: 'center',
        marginLeft: 10,
        textDecorationLine: 'underline'      
    },
    textDescription: {
        textAlign:'justify',
        marginHorizontal: 10
    }

});

const MovieDescription = ({description}) => {

    const [showDescription, updateShowDescription] = useState(false);   

    const changeDescription = () => updateShowDescription(!showDescription);    

    return (
        <SafeAreaView>
            <Text 
                style={ styles.btn } 
                onPress={() => changeDescription()}    
            >
            Ver descripción
            </Text>
            {
              showDescription 
                ?
                (
                    <Text style={ styles.textDescription } >
                        { description }
                    </Text>
                )
                :
                    null
            }
        </SafeAreaView>

    );

};

export default MovieDescription;