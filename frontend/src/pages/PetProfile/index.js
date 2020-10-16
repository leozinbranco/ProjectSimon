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
import { Button, Text } from 'react-native-paper';

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

    alert(JSON.stringify(animal));

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

                <View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <BackArrow navigation={navigation} style={Style.backarr} size={40} />
                        <Text style={Style.nameAnimal}>
                            {pet.name}
                        </Text>
                    </View>

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

                            <TouchableOpacity
                                onPress={() => navigation.navigate('OngProfile', { ong_id: pet.ong_id })}

                            >
                                <Text style={Style.textInfo}>ONG • {pet.company_name}</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="dog" size={20} color="black" />
                            <Text style={Style.textInfo}>Tipo • {pet.type_name}</Text>
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
                            <Text style={Style.textInfo}>Idade • {pet.age}</Text>
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

                        <Button
                            icon="whatsapp"
                            mode="contained"
                            onPress={() => sendWhatsApp()}
                            color="darkgreen"
                            style={Style.btnWhats}
                        >
                            Adotar
                            </Button>


                        : null
                    }

                    {pet.available_for_patronize == 'S' ?

                        <Button
                            icon="whatsapp"
                            mode="contained"
                            onPress={() => navigation.navigate('Patronize', { animal: animal })}
                            color="#ffa500"
                            dark={true}
                            style={Style.btnWhats}
                        >
                            Apadrinhar
                        </Button>
                        : null
                    }


                </View>

            </ScrollView>

        </SafeAreaView>

    );
}


