import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
import axios from 'axios'

import Style from './style'

import { local } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'

import { AuthContext } from '../../services/auth';


export default function Login({ navigation }) {
    const goNextPage = () => navigation.navigate('Register');

    const { toggleLogged, saveUserData, isLogged } = React.useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('theus-7@hotmail.com');
    const [password, setPassword] = useState('m147147m');



    const makeLogin = async (email, password) => {

        try {
            setLoading(true);
            await axios.post(`${local}/auth`,
                {
                    email,
                    password
                },
                {
                    headers: { Authorization: `Bearer ${api_token}` }
                }
            ).then(result => {

                if (result.data) {

                    setLoading(false);
                    alert(result.data);
                    saveUserData(result.data);

                    toggleLogged();
                }

            })
                .catch(reason => {
                    setLoading(false);
                    //console.log(reason);
                    alert("Login invalido: " + reason);
                })

        }
        catch (e) {
            setLoading(false)
            alert("Impossivel se conectar")
        }
    }

    return (

        <SafeAreaView style={Style.container}>
            <View style={Style.formContainer}>

                <ActivityIndicator size="large" animating={loading} color={'white'} />
                {/*<Text> {loading.toString()} </Text>*/}

                <TextInput
                    style={Style.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)} value={email}
                />

                <TextInput
                    style={Style.input}
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)} value={password}
                />

                <TouchableOpacity style={Style.button} onPress={() => makeLogin(email, password)}>
                    <View>
                        <Text style={Style.whiteText}> Entrar </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={Style.createAccount} onPress={goNextPage}>
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