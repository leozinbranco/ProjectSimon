import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {
    Switch,
    Paragraph,
    Caption,
    Text,
    Divider,
    Avatar,
    Button
} from 'react-native-paper';
import axios from 'axios';
import { local, heroku } from '../../constants/api_url.json';
import { api_token } from '../../constants/token.json';
import { AuthContext } from '../../services/auth';

import BackArrow from '../../components/BackArrow';
import Style from './style'

export default function Patronize({ route, navigation }) {
    const { animal } = route.params;

    const { userData } = React.useContext(AuthContext);

    const [selectedAmount, setSelectedAmount] = useState('');
    const [ong, setOng] = useState({});
    const [ongBankData, setOngBankData] = useState({});


    const [monthly, setMonthly] = useState(false);

    const [amounts, setAmounts] = useState([
        { id: 1, label: "R$ 10,00", value: 10 },
        { id: 2, label: "R$ 20,00", value: 20 },
        { id: 3, label: "R$ 30,00", value: 30 },
    ])

    useEffect(() => { setPaymentCard(route.params.selected_card) }, [route.params.selected_card])

    useEffect(() => {
         getOngBankData();
    }, [])

    const [payment_card, setPaymentCard] = useState(route.params.selected_card);

    const savePatronize = async () => {

        const body = {
            id_user: userData.id,
            user_bank_data: route.params.card_title  + ' ' + route.params.selected_card.cardholder_name ,
            id_ong: animal.ong_id,
            ong_bank_data: `${ongBankData.company_name} CNPJ: ${ongBankData.cnpj} Agency: ${ongBankData.agency_number} Account number: ${ongBankData.agency_number}`,
            value: selectedAmount,
            monthly: monthly,
            id_animal: animal.id
        }
        console.log(JSON.stringify(body))

        try {
            axios.post(`${local}/patronize`,
                body,
                {
                    headers: { Authorization: `Bearer ${api_token}` }
                })
                .then((response) => {
                    alert('Apadrinhamento feito com sucesso!')
                    navigation.pop()
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e);
                })
        }
        catch (e) {
            console.log(e);
        } 
    }

    const getOngBankData = async () => {
        try {

            axios.get(`${local}/ong_bank_data/${animal.ong_id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));
                    setOngBankData(response.data);
                    //console.log(animalsData);
                    console.log(response.data);

                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    return (

        <SafeAreaView style={Style.background}>

            <Text style={Style.title}> Apadrinhar </Text>

            <View style={Style.container}>

                <ScrollView style={{ width: '100%', }}>

                    <View style={{ width: '100%', height: 1000 }}>
                        <BackArrow navigation={navigation} size={30} />

                        <View style={Style.avatars}>
                            <View>
                                <Avatar.Image size={100} style={{ marginRight: 20 }}
                                    source={require('../../../assets/gato.png')}
                                />
                            </View>

                            <View >
                                <Avatar.Image size={100}
                                    source={require('../../../assets/ong.png')}

                                />
                            </View>
                        </View>


                        <View style={Style.section}>
                            <Caption >{`Apadrinhando ${animal.name}, alem de estar ajudando-o, você estará ajudando a ONG`}
                                {`${animal.company_name} `} a manter seus outros bixinhos felizes e saudaveis!
                            </Caption>
                        </View>
                        <Divider />

                        <View style={Style.section}>

                            <Paragraph>Escolha com quanto você pode ajudar</Paragraph>

                            <View style={Style.selectContainer}>

                                <FlatList
                                    style={{ width: '100%' }}
                                    data={amounts}
                                    renderItem={({ item }) => (

                                        <Button icon=""
                                            color='grey'
                                            mode='outlined'
                                            onPress={() => setSelectedAmount(item.value)}
                                            style={item.value == selectedAmount ? Style.cardSelected : Style.card}
                                        >
                                            <Text style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}> {item.label} </Text>
                                        </Button>

                                    )}
                                    keyExtractor={item => item.id.toString()}
                                />

                            </View>
                        </View>



                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Paragraph>Renovação mensal</Paragraph>
                            <Switch value={monthly} color={'#3FB55D'} onValueChange={() => { setMonthly(!monthly) }} style={{ marginLeft: 40, width: 30 }} />
                        </View>
                        <Caption>Continuar a apadrinhar esse animal todo mês a partir de hoje</Caption>


                        <View style={Style.section}>
                            <Paragraph>Escolha um cartão de crédito</Paragraph>


                            {//Flatlist aqui com os cartoes do cliente
                            }

                            <View style={Style.selectContainer}>
                                <Button icon="credit-card-outline" color='grey' mode='outlined' onPress={() => navigation.navigate('UserBankData')}>
                                    <Caption>{route.params.card_title || "Selecione um"}</Caption>
                                </Button>
                            </View>


                        </View>

                        <Caption>Por enquanto somente é possivel realizar apadrinhamentos em nossa plataforma usando um cartão de crédito </Caption>

                        <Button
                            mode='contained'
                            style={{ backgroundColor: '#3FB55D', marginVertical: 10 }}
                            onPress={() => { savePatronize() }}
                        >
                            <Text style={{ color: 'white' }}> Confirmar </Text>
                        </Button>



                    </View>

                </ScrollView>

            </View>

        </SafeAreaView>)

}