import React, { useState } from 'react';
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

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cep, setCep] = useState('');
    const [birthdate, setBirthdate] = useState('');


    return (

        <SafeAreaView style={Style.container}>
            <Text style={Style.title}>Sobre você</Text>

            <View style={Style.formContainer}>


                <TextInput
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder='Nome'
                    style={Style.input}
                    autoCompleteType='name'
                />


                <TextInput
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder='Email'
                    style={Style.input}
                    autoCompleteType='email'
                    keyboardType='email-address'
                />

                <TextInput
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder='Senha'
                    style={Style.input}
                    autoCompleteType='password'
                    keyboardType='default'
                    secureTextEntry={true}

                />

                <TextInput
                    onChangeText={text => setWhatsapp(text)}
                    value={whatsapp}
                    placeholder='Whatsapp'
                    style={Style.input}
                    autoCompleteType='tel'
                    keyboardType='decimal-pad'
                />

                <TouchableOpacity style={Style.button}>
                    <Text style={{color: 'white'}}> Confirmar </Text>
                </TouchableOpacity>

            </View>




        </SafeAreaView>
    );
}