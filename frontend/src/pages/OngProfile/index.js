import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
    Linking,
} from 'react-native';
import {
    Paragraph,
    Caption,
    Text,
    Avatar,
    Button,
    Title,
    Card,
    Divider
} from 'react-native-paper';


import Style from './style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { local, heroku, azure } from '../../constants/api_url.json';
import { api_token } from '../../constants/token.json';

import axios from 'axios'
import { set } from 'react-native-reanimated';

export default function OngProfile({ route, navigation, ongId }) {
    const [ong, setOng] = useState({});
    const [address, setAdress] = useState({});

    const { ong_id } = route.params;

    const getOng = async () => {
        try {

            axios.get(`${azure}/ongs/${ong_id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));
                    setOng(response.data);
                    //console.log(animalsData);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    const getAddress = async () => {
        try {

            axios.get(`https://api.postmon.com.br/v1/cep/${ong.cep}`)
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));
                    setAdress(response.data);
                    //console.log(animalsData);
                })
                .catch((e) => {
                    //alert("Ocorreu um erro !  >> " + e);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    function sendWhatsApp() {
        const message = "Olá, vim do aplicativo de apadrinhamento e adoção de animais Simon "
        Linking.openURL(`whatsapp://send?phone${ong.whatsapp}&text=${message}`);
    }


    useEffect(() => {

        getOng();


    }, []);

    useEffect(() => {
        getAddress();

        navigation.setOptions({ title: ong.company_name })

    }, [ong]);

    return (
        <SafeAreaView>
            <ScrollView>

                <View>

                    <Card>

                        <View style={Style.head}>
                            <Avatar.Image size={130} style={{ alignSelf: 'center', marginBottom: 10, backgroundColor: 'lightgrey' }}
                                source={require('../../../assets/ong_example.png')}
                            />

                            <Title >
                                {ong.company_name}
                            </Title>
                        </View>

                        <Card.Content>


                            <Caption style={Style.textInfo}>Biografia</Caption>
                            <Paragraph style={Style.bioCont}>{ong.bio}</Paragraph>

                            <Divider />

                            <Caption style={Style.textInfo}>Informações de contato</Caption>

                            <Caption>
                                Email 
                            </Caption>
                            <Text>
                                {ong.email}
                            </Text>

                            <Caption>
                                Whatsapp ou telefone
                            </Caption>
                            <Text>
                                {ong.whatsapp}
                            </Text>

                            <Button
                                icon="whatsapp"
                                mode="outlined"
                                onPress={() => sendWhatsApp()}
                                color="darkgreen"
                                style={{ marginTop: 10 }}
                            >
                                Entrar em contato
                            </Button>

                            <Caption style={Style.textInfo}>Endereço</Caption>
                            <Paragraph >
                                {`${address.logradouro}, ${address.bairro}, nº ${ong.number}`}
                            </Paragraph>
                            <Paragraph>
                                {`${address.cidade} -  ${address.estado}`}
                            </Paragraph>

                            <Caption>
                                {`CEP • ${ong.cep}`}
                            </Caption>

                            <Caption style={Style.textInfo}>CNPJ</Caption>

                            <Caption >
                                {`${ong.cnpj}`}
                            </Caption >



                        </Card.Content>

                    </Card>

                </View>


                {/* <View>
                    <Text style={Style.nameAnimal}>
                        {pet.name}
                    </Text>

                    <Image style={Style.image}
                        source={require('../../../assets/gato.png')}
                    />
                </View>

                <View>
                    <View style={Style.bioPetContainer}>
                        <Text style={Style.textInfo}>Biografia</Text>
                        <Text style={Style.bioCont}>{pet.description}</Text>
                    </View>

                    <View style={Style.infoPetContainer}>

                        <View style={Style.line}>
                            <Image
                                source={require('../../../assets/ong.png')}
                                style={Style.logo}
                            />
                            <Text style={Style.textInfo}>ONG • {pet.company_name}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="dog" size={20} color="black" />
                            <Text style={Style.textInfo}>Tipo • {pet.type}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="paw" size={20} color="black" />
                            <Text style={Style.textInfo}>Raça • {pet.breed}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="info-circle" size={20} color="black" />
                            <Text style={Style.textInfo}>Cor • {pet.color}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome name="heart-o" size={20} color="black" />
                            <Text style={Style.textInfo}>Idade • PRECISA SER ADICIONADO NA API</Text>
                        </View>

                        <View style={Style.line}>
                            {pet.available_for_adoption == 'S' ? <AntDesign name="check" size={20} color="black" /> : <AntDesign name="close" size={24} color="black" />}
                            <Text style={Style.textInfoLong}>Disponivel para adoção</Text>
                        </View>

                        <View style={Style.line}>
                            {pet.available_for_patronize == 'S' ? <AntDesign name="check" size={20} color="black" /> : <AntDesign name="close" size={24} color="black" />}
                            <Text style={Style.textInfoLong}>Disponivel para apadrinhamento</Text>
                        </View>




                    </View>

                    {pet.available_for_adoption == 'S' ?
                        <TouchableOpacity style={Style.buttonAdopt} onPress={sendWhatsApp}>
                            <View style={Style.line}>

                                <FontAwesome5 name="whatsapp" size={22} color="white" />
                                <Text style={Style.textInsideButton}> Entrar em contato para adotar </Text>

                            </View>
                        </TouchableOpacity>
                        : null
                    }

                    {pet.available_for_patronize == 'S' ?
                        <TouchableOpacity
                            style={Style.buttonPatronize}
                            onPress={() => navigation.navigate('Patronize', { animal: animal })}
                        >
                            <View style={Style.line}>

                                <FontAwesome5 name="hand-holding-heart" size={22} color="white" />
                                <Text style={Style.textInsideButton}> Apadrinhar </Text>
                            </View>
                        </TouchableOpacity>
                        : null
                    }

                </View>
 */}



            </ScrollView>
        </SafeAreaView>

    );
}


