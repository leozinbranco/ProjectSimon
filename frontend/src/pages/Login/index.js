import React ,{useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import Style from './style'

export default function Login() {

    return (

        <SafeAreaView style={Style.container}>

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
                    <Text style={Style.whiteText}> OK </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10}}>
                    <Text style={Style.whiteText}> Criar conta </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}