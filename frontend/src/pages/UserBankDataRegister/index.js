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

    const [name, setName] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cpf, setCpf] = useState('');


    //const [userBankDataRegister, setUserBankDataRegister] = useState([])

    const registerBankData = async () => {
        alert(userData.id);
        try {
            await axios.post(`${local}/user_bank_data`, {
                id_user : userData.id,
                cardholder_name : name,
                card_number: cardNumber,
                expires_date : expirationDate,
                cvv,
                address_line_1 : "Rua Teste",
                address_line_2 : null,
                city : "Campinas",
                state : "SP",
                cep : "13076414",
                country: "Brazil"

                
            },
                {
                    headers: { Authorization: `Bearer ${api_token}` }
                })
                .then((response) => {
                    //alert(JSON.stringify(response.data));
                    navigation.pop();
                    alert("Sucesso! Seu cartão foi cadastrado com sucesso.");
                })
                .catch((e) => {
                    alert("Ocorreu um erro no cadastro!" + e);

                })

        } catch (e) {
            alert(e);
        }
    }

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
                        value={name}
                        mode="outlined"
                        onChangeText={name => setName(name)}
                    />

                    <TextInput
                        label="Número do Cartão"
                        style={Style.formCard}
                        value={cardNumber}
                        
                        mode="outlined"
                        onChangeText={cardNumber => setCardNumber(cardNumber)}
                    />
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            label="CVV"
                            style={Style.formCardCVV}
                            value={cvv}
                            mode="outlined"
                            
                            onChangeText={cvv => setCvv(cvv)}
                        />
                        <TextInput
                            label="Validade"
                            style={Style.formCardExDate}
                            value={expirationDate}
                            mode="outlined"
                            onChangeText={expirationDate => setExpirationDate(expirationDate)}
                        />


                    </View>

                    <TextInput
                        label="CPF do Titular"
                        style={Style.formCard}
                        value={cpf}
                        mode="outlined"
                        onChangeText={cpf => setCpf(cpf)}
                    />

                    <TouchableOpacity style={Style.confirmButton} onPress={() => { registerBankData() }} >
                        <Text style={{ color: 'white' }}> Confirmar </Text>
                    </TouchableOpacity>

                </View>





            </ScrollView>

        </SafeAreaView>
    )

}