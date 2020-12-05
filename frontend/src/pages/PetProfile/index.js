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
    ImageBackground
} from 'react-native';
import { Button, Text, Divider, Title, Caption, Paragraph, Card, IconButton, Chip } from 'react-native-paper';

import Style from '../PetProfile/style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { local, heroku } from '../../constants/api_url.json';
import BackArrow from '../../components/BackArrow';
import { api_token } from '../../constants/token.json';

import axios from 'axios'

export default function PetProfile({ route, navigation }) {
    const [pet, setPet] = useState({});

    const [ong, setOng] = useState({});
    const { animal } = route.params;
    const message = "Teste Whatsapp";

    const getWhatsapp = async () => {
        try {

            axios.get(`${local}/ongs/${animal.ong_id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setOng(response.data);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone${ong.whatsapp}&text=${message}`);
    }

    useEffect(() => {

        getPet();
        getWhatsapp();

        navigation.setOptions({ title: animal.name })

    }, [animal]);

    const getPet = async () => {
        try {
            axios.get(`${local}/animals/${animal.id}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setPet(response.data)
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
        <SafeAreaView>
            <ScrollView>

                <ImageBackground style={Style.image} source={{ uri: pet.image_url }}>
                </ImageBackground>

                <View>
                    <Card>
                        <Card.Title title={pet.name} />
                        <Card.Content>
                            <ScrollView horizontal={true} >
                                <View style={Style.line}>
                                    {pet.available_for_adoption == 'S' ?
                                        <Chip mode='outlined' icon="check" style={{ borderColor: 'green', borderWidth: 1, marginRight: 5 }} textStyle={{ fontSize: 12, }}>Disponivel para adoção</Chip> : null}

                                    {pet.available_for_patronize == 'S' ?
                                        <Chip mode='outlined' icon="check" style={{ borderColor: 'orange', borderWidth: 1 }} textStyle={{ fontSize: 12, }}>Disponivel para apadrinhar</Chip> : null}
                                </View>

                            </ScrollView>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Caption> Sobre </Caption>
                            <Text >{pet.description}</Text>
                        </Card.Content>
                    </Card>

                    <View>
                        <Card>
                            <Card.Content style={Style.line}>
                                <Image
                                    source={require('../../../assets/ong.png')}
                                    style={Style.logo}
                                />
                                <Caption> ONG • {pet.company_name}</Caption>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('OngProfile', { ong_id: pet.ong_id })}>Ver perfil da ong</Button>
                            </Card.Actions>
                        </Card>

                        <Card>

                            <Card.Content style={Style.line}>
                                <FontAwesome5 name="dog" size={20} color="black" />
                                <Caption style={Style.textInfo}>Tipo • {pet.type_name}</Caption>
                            </Card.Content>

                            <Card.Content style={Style.line}>
                                <FontAwesome5 name="paw" size={20} color="black" />
                                <Text style={Style.textInfo}>Raça • {pet.breed}</Text>
                            </Card.Content>

                            <Card.Content style={Style.line}>
                                <FontAwesome5 name="info-circle" size={20} color="black" />
                                <Text style={Style.textInfo}>Cor • {pet.color}</Text>
                            </Card.Content>


                            <Card.Content style={Style.line}>
                                <FontAwesome name="heart-o" size={20} color="black" />
                                <Text style={Style.textInfo}>Idade • {pet.age == 0 ? 'Desconhecida' : pet.age}</Text>
                            </Card.Content>


                            <Card.Actions>

                                {pet.available_for_patronize == 'S' ?

                                    <Button
                                        icon="crown"
                                        mode="contained"
                                        onPress={() => navigation.navigate('Patronize', { animal: animal })}
                                        color="#ffa500"
                                        dark={true}
                                        style={Style.button}

                                    >
                                        Apadrinhar 
                                    </Button>
                                    : null
                                }

                                {pet.available_for_adoption == 'S' ?

                                    <Button
                                        icon="whatsapp"
                                        mode="outlined"
                                        onPress={() => sendWhatsApp()}
                                        color="darkgreen"
                                        style={Style.button}
                                    >
                                        Adotar
                                    </Button>


                                    : null
                                }


                            </Card.Actions>

                        </Card>


                    </View>



                </View>

            </ScrollView>

        </SafeAreaView >

    );
}


