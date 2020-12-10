import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import {
    Switch,
    Paragraph,
    Caption,
    Text,
    Divider,
    Avatar,
    Button,
    Title,
    Appbar,
    Card
} from 'react-native-paper';
import axios from 'axios';
import { local, heroku, azure } from '../../constants/api_url.json';
import { api_token } from '../../constants/token.json';
import { AuthContext } from '../../services/auth';
import { WebView } from 'react-native-webview';
import SuccessModal from '../../components/SuccessModal';

import BackArrow from '../../components/BackArrow';
import Style from './style'

export default function Patronize({ route, navigation }) {
    const { animal } = route.params;

    const { userData } = React.useContext(AuthContext);

    const [selectedAmount, setSelectedAmount] = useState('');
    const [ong, setOng] = useState({});
    const [ongBankData, setOngBankData] = useState({});
    const [showCheckout, setShowCheckout] = useState(false);
    const [monthly, setMonthly] = useState(false);
    const [successModalVisibility, setSuccessModalVisibility] = useState(false);
    const [payment_card, setPaymentCard] = useState(route.params.selected_card);

    const [amounts, setAmounts] = useState([
        { id: 1, label: "R$ 10,00", value: 10, plan_id: '2c93808476401a1301764338e8ef01c3' },
        { id: 2, label: "R$ 20,00", value: 20, plan_id: '2c93808476401a130176433993f301c5' },
        { id: 3, label: "R$ 30,00", value: 30, plan_id: '2c938084762e304401764339b0070fb7' },
    ])

    useEffect(() => { setPaymentCard(route.params.selected_card) }, [route.params.selected_card])

    useEffect(() => {
        getOngBankData();
    }, [])

    const closeSuccessModal = () => {
        setSuccessModalVisibility(false)
        navigation.pop()
    }

    const savePatronize = async () => {

        const body = {
            id_user: userData.id,
            user_bank_data: "Pago via Mercado Pago - Plano" + selectedAmount.plan_id,
            id_ong: animal.ong_id,
            ong_bank_data: `${ongBankData.company_name} CNPJ: ${ongBankData.cnpj} `,
            value: selectedAmount.value,
            monthly: monthly,
            id_animal: animal.id
        }

        console.log(body)

        try {
            axios.post(`${azure}/patronize`,
                body,
                {
                    headers: { Authorization: `Bearer ${api_token}` }
                })
                .then((response) => {
                    //alert('Apadrinhamento feito com sucesso!')
                    setSuccessModalVisibility(true)
                })
                .catch((error) => {
                    console.log(error.response.data)
                    alert("Ocorreu um erro !" + error.response.data);
                })
        }
        catch (e) {
            console.log(e);
        }
    }

    const stateChange = (state) => {
        console.log(state);
        switch (state.title) {
            case 'Success':
                setShowCheckout(false)
                savePatronize()
                //alert.alert("Pagamento aprovado!", `Recebemos seu pagamento de ${selectedAmount} `)
                break;
            case 'Pronto! Você já assinou':
                setShowCheckout(false)
                savePatronize();
                break;
            case 'Pending':
                setShowCheckout(false)
                Alert.alert("Pagamento pendente!", `Seu pagamento de ${selectedAmount} está pendente de processamento, assim que for processado seguiremos com o pedido!`)
                break;
            case 'Failure':
                setShowCheckout(false)
                Alert.alert("Pagamento não aprovado!", 'Verifique os dados e tente novamente')
                break;
        }


    }

    const getOngBankData = async () => {
        try {

            axios.get(`${azure}/ong_bank_data/${animal.ong_id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setOngBankData(response.data);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    if (!showCheckout) {


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
                                        source={{ uri: animal.image_url }}
                                    />
                                </View>
                            </View>


                            <View style={Style.section}>
                                <Caption >{`Apadrinhando ${animal.name}, alem de estar ajudando-o, você estará ajudando a ONG `}
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
                                                onPress={() => setSelectedAmount(item)}
                                                style={item.value == selectedAmount.value ? Style.cardSelected : Style.card}
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
                        



                            <Button
                                mode='contained'
                                style={{ backgroundColor: '#3FB55D', marginVertical: 10 }}
                                onPress={() => {
                                    if (selectedAmount === '')
                                        alert("Você não escolheu a quantidade!")
                                    else
                                        setShowCheckout(true);
                                }}
                            >
                                <Text style={{ color: 'white' }}> Confirmar </Text>
                            </Button>


                            <Caption>Por enquanto somente é possivel realizar apadrinhamentos em nossa plataforma via mercado pago </Caption>


                            <Card style={{ borderWidth: 0, marginVertical: 10}}>
                                <Card.Title
                                    subtitle="Dúvidas?"
                                    left={(props) => <Avatar.Icon size={42} icon="help-circle" style={{ backgroundColor: 'white' }} />}
                                />
                            </Card>

                            <Paragraph>Como funciona a assinatura</Paragraph>

                            <Caption>Será descontado mensalmente o valor selecionado e o valor será repassado para a ONG </Caption>

                        </View>

                    </ScrollView>

                </View>

                <SuccessModal visible={successModalVisibility} closeModal={closeSuccessModal}/>

            </SafeAreaView>)

    } else {

        const url = monthly ?
            `https://www.mercadopago.com/mlb/debits/new?preapproval_plan_id=${selectedAmount.plan_id}` :
            `${azure}/payments/checkout/${animal.name}/${userData.email}/${animal.name}/${selectedAmount.value}`

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <Appbar.Header style={{ backgroundColor: "#3FB55D" }} dark={true} >
                    <Appbar.BackAction onPress={() => setShowCheckout(false)} />
                    <Appbar.Content title={`Apadrinhando ${animal.name}`} />
                </Appbar.Header>

                <WebView
                    source={{
                        uri: url,
                        headers: { "Authorization": `Bearer ${api_token}` }
                    }}
                    onNavigationStateChange={state => stateChange(state)}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator style={{ height: '100%' }}></ActivityIndicator>}
                />

            </View>
        )

    }

}