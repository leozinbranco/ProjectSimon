import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import axios from 'axios'


import Style from './style'

import { AuthContext } from '../../services/auth';


export default function Login({navigation}) {
    const goNextPage = () => navigation.navigate('Register');

    const { toggleLogged, saveUserData, isLogged} = React.useContext(AuthContext);

    
    const [email, setEmail] = useState('testeusuario@gmail.com');
    const [password, setPasword] = useState('aa112233');

    const makeLogin = async (email, password) => {

      await axios.post('http://192.168.0.5:3000/auth', { email, password }).then(result => {

          if (result.data) {
            toggleLogged() 
            //alert(isLogged)
            //saveUserData(ret.data)
           }

      }).catch(reason => {
          alert("Login invalido")
      })

      
    }

    return (

        <SafeAreaView  style={Style.container}>
            <View  style={Style.formContainer}>

                <TextInput
                    style={Style.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)} value={email}
                />

                <TextInput
                    style={Style.input}
                    placeholder="Senha"
                    onChangeText={(text) => setPasword(text)} value={password}
                />

                <TouchableOpacity style={Style.button} onPress={ () => makeLogin(email, password)}>
                    <View>
                        <Text style={Style.whiteText}> Entrar </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={Style.createAccount } onPress={goNextPage}>
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