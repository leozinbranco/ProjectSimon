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


import BackArrow from '../../components/BackArrow';

import Style from './style'

export default function Patronize({ route, navigation }) {
    const { animal } = route.params;

    const [selectedAmount, setSelectedAmount] = useState('');

    const [monthly, setMonthly] = useState(false);

    const [amounts, setAmounts] = useState([
        { id: 1, label: "R$ 10,00", value: 10 },
        { id: 2, label: "R$ 20,00", value: 20 },
        { id: 3, label: "R$ 30,00", value: 30 },
    ])


    const [payment_card, setPaymentCard] = useState('');

    return (

        <SafeAreaView style={Style.background}>

            <Text style={Style.title}> Apadrinhar </Text>

            <View style={Style.container}>

                <ScrollView style={{width: '100%',   }}>

                    <View style={{ width: '100%', height: 1000 }}>
                    <BackArrow navigation={navigation} />
                    
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
                                    <Caption>MasterCard 5454.XXX.XXX.XXX.872</Caption>
                                </Button>
                            </View>


                        </View>

                        <Caption>Por enquanto somente é possivel realizar apadrinhamentos em nossa plataforma usando um cartão de crédito </Caption>

                        <TouchableOpacity style={Style.button} onPress={() => { createAccount() }} >
                            <Text style={{ color: 'white' }}> Confirmar </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>

        </SafeAreaView>)

}