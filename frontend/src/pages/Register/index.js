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

import Style from './style'

export default function Register() {

    return (

        <SafeAreaView style={Style.container}>
            <Text style={Style.title}>Qual seu perfil?</Text>

            <View style={Style.formContainer}>

                <TouchableOpacity style={Style.button}>
                        <Image
                            source={require('../../../assets/person.png')}
                        />
                        <Text> Pessoa física </Text>
                </TouchableOpacity>

                <TouchableOpacity style={Style.button}>
                        <Image
                            source={require('../../../assets/ong.png')}
                        />
                        <Text> ONG </Text>
                </TouchableOpacity>

            </View>




        </SafeAreaView>
    );
}