import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { Caption } from 'react-native-paper'

import Style from './style'

export default function Register({ navigation }) {

    return (

        <SafeAreaView style={Style.container}>
            <Text style={Style.title}>Qual seu perfil?</Text>

            <View style={Style.formContainer}>

                <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('UserRegistration')}>
                        <Image
                            source={require('../../../assets/person.png')}
                        />
                        <Caption> Pessoa física </Caption>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('OngRegistration')}>
                        <Image
                            source={require('../../../assets/ong.png')}
                        />
                        <Caption> ONG </Caption>
                </TouchableOpacity>

            </View>




        </SafeAreaView>
    );
}