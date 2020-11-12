import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
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
import { WebView } from 'react-native-webview';

export default function UserBankData({ route, navigation }) {

    const { userData } = React.useContext(AuthContext);
    const [showCheckout, setShowCheckout] = useState(false);
    const [userBankData, setUserBankData] = useState([]);

    const stateChange = (state) => {
        switch (state.title) {
            case 'success':
                setShowCheckout(false)
                Alert.alert("Pagamento aprovado!", `Recebemos seu pagamento de `)
                break;
            case 'pending':
                setShowCheckout(false)
                Alert.alert("Pagamento pendente!", `Seu pagamento de está pendente de processamento, assim que for processado seguiremos com o pedido!`)
                break;
            case 'failure':
                setShowCheckout(false)
                Alert.alert("Pagamento não aprovado!", 'Verifique os dados e tente novamente')
                break;
        }
    }

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

    if (!showCheckout) {
        return (

            <SafeAreaView style={{ backgroundColor: 'white', padding: 10 }}>

                <BackArrow navigation={navigation} style={{ margin: 10 }} size={50} />
                <View style={{ margin: 10 }}>
                    <Title>
                        Seus cartões de crédito cadastrados
                </Title>

                    <Caption>
                        Você pode ter até no  3 (três) cartões de credito cadastrados no momento
                </Caption>
                </View>



                <FlatList
                    style={{ width: '95%', margin: 10 }}
                    data={userBankData}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Patronize', { card_title: `••• ••• ••• ${formatCardNumber(item.card_number)}`, selected_card: item });
                            }}>

                            <Card style={{ borderWidth: 0.5, marginVertical: 10 }}>
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
                    onPress={() => setShowCheckout(true)}//onPress={() => { navigation.navigate('UserBankDataRegister') }}
                >
                    <Text> Cadastrar novo </Text>
                </Button>


            </SafeAreaView>
        )
    } else {

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => setShowCheckout(false)}><Text style={{ fontSize: 20, color: 'white' }}>{"<<"}</Text></TouchableOpacity>
                <Title>Pagamento do pedido</Title>

                <WebView
                    source={{ uri: `${local}/payments/checkout/1/cc19377@g.unicamp.br/cocacola/150.00`,
                    headers: { "Authorization": `Bearer ${api_token}` } }}
                    onNavigationStateChange={state => stateChange(state)}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator style={{height:'100%'}}></ActivityIndicator>}
                />

            </View>
        )

    }

}