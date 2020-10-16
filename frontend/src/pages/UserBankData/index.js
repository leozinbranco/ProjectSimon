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

export default function UserBankData({ route, navigation }) {

    const { userData } = React.useContext(AuthContext);

    const [userBankData, setUserBankData] = useState([])

    const getUserBankData = () => {

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
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }

    }

    const deleteUserBankData = (id) => {

        try {

            axios.delete(`${local}/user_bank_data/${id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));

                    //console.log(response);
                    alert("Cartão apagado com sucesso!");
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        getUserBankData();
    })

    const formatCardNumber = (cardNumber) => {
        return cardNumber.substring(cardNumber.length - 4, cardNumber.length)
    }

    return (

        <SafeAreaView style={{ backgroundColor: 'white', padding: 10 }}>

            <BackArrow navigation={navigation} />

            <Title>
                Seus cartões de crédito cadastrados
            </Title>

            <Caption>
                Você pode ter até no  3 (três) cartões de credito cadastrados no momento
            </Caption>



            <FlatList
                style={{ width: '95%' }}
                data={userBankData}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Patronize', { card_title: `••• ••• ••• ${formatCardNumber(item.card_number)}`, selected_card: item });
                        }}>

                        <Card style={{ borderWidth: 0.5, marginVertical: 10}}>
                            <Card.Title
                                title={`••• ••• ••• ${formatCardNumber(item.card_number)}`}
                                subtitle={`${item.cardholder_name}`}
                                left={(props) => <Avatar.Icon {...props} icon="credit-card-outline" style={{ backgroundColor: 'white' }} />}
                                right={(props) => <IconButton {...props} icon="close" color="red" onPress={() => { deleteUserBankData(item.id) }} />}
                            />
                            <Divider />

                        </Card>
                    </TouchableOpacity>



                )}
                keyExtractor={item => item.id.toString()}
            />

            <Button
                color='red'
                mode='outlined'
                onPress={() => { navigation.navigate('UserBankDataRegister') }}
            >
                <Text> Cadastrar novo </Text>
            </Button>


        </SafeAreaView>
    )

}