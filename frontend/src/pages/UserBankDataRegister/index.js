import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import axios from 'axios';
import {
    Paragraph,
    Caption,
    Text,
    TextInput,
    Divider,
    Avatar,
    Button,
    Card,
    IconButton,
    Title
} from 'react-native-paper';

import BackArrow from '../../components/BackArrow';

import { AuthContext } from '../../services/auth';

import { local, heroku } from '../../constants/api_url.json';
import { api_token } from '../../constants/token.json';

import Style from './style';

export default function UserBankDataRegister({ route, navigation }) {

    const { userData } = React.useContext(AuthContext);

    const [text, setText] = React.useState('');

    const [userBankDataRegister, setUserBankDataRegister] = useState([])

    /*const getUserBankData = () => {

        try {

            axios.get(`${local}/user_bank_data/${userData.id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));

                    //console.log(response);
                    setUserBankData(response.data)
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message);
                })
        }
        catch (e) {
            console.log(e);
        }

    }*/

    useEffect(() => {
        //getUserBankData();
    }, [])

    const formatCardNumber = (cardNumber) => {
        return cardNumber.substring(cardNumber.length - 4, cardNumber.length)
    }

    return (

        <SafeAreaView style={{ backgroundColor: 'white', padding: 10, height:'100%' }}>
            <ScrollView style={Style.formContainer}>
                <BackArrow navigation={navigation} />

                <Title>
                    Seus cartões de crédito cadastrados
            </Title>

                <Caption>
                    Você pode ter até no máximo 3 (três) cartões de credito cadastrados no momento
            </Caption>



                <View style={{}}>
                    <TextInput
                        label="Nome"
                        style={Style.formCard}
                        value={text}
                        mode="outlined"
                        onChangeText={text => setText(text)}
                    />

                    <TextInput
                        label="Número do Cartão"
                        style={Style.formCard}
                        value={text}
                        mode="outlined"
                        onChangeText={text => setText(text)}
                    />
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            label="CVV"
                            style={Style.formCardCVV}
                            value={text}
                            mode="outlined"
                            onChangeText={text => setText(text)}
                        />
                        <TextInput
                            label="Validade"
                            style={Style.formCardExDate}
                            value={text}
                            mode="outlined"
                            onChangeText={text => setText(text)}
                        />


                    </View>

                    <TextInput
                        label="CPF do Titular"
                        style={Style.formCard}
                        value={text}
                        mode="outlined"
                        onChangeText={text => setText(text)}
                    />

                    <TouchableOpacity style={Style.confirmButton} onPress={() => { createAccount() }} >
                        <Text style={{ color: 'white' }}> Confirmar </Text>
                    </TouchableOpacity>

                </View>





            </ScrollView>

        </SafeAreaView>
    )

}