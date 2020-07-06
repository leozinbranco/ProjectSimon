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

export default function Login({navigation}) {
    const goNextPage = () => navigation.navigate('Register');

    return (

        <SafeAreaView  style={Style.container}>
            <View  style={Style.formContainer}>

                <TextInput
                    style={Style.input}
                    placeholder="Email"
                />

                <TextInput
                    style={Style.input}
                    placeholder="Senha"
                />

                <TouchableOpacity style={Style.button}>
                    <View>
                        <Text style={Style.whiteText}> Entrar </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingTop: 10 }} onPress={goNextPage}>
                    <Text style={Style.whiteText}> Criar conta </Text>
                </TouchableOpacity>

            </View>

            <View style={Style.logoImage}>
                <Image
                    source={require('../../../assets/logo.png')}
                />
            </View>


        </SafeAreaView>
    );
}