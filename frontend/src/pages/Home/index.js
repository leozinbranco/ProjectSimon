import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper'

import axios from 'axios';
import { api_token } from '../../constants/token.json';
import { local, heroku } from '../../constants/api_url.json';
import { AuthContext } from '../../services/auth';
import Style from './style';

export default function Home({ navigation }) {

    const { userData, isLogged, toggleLogged } = React.useContext(AuthContext);

    const [animalsData, setAnimalsData] = useState([])

    //console.log(api_token);
    //alert(api_token);
    useEffect(() => {
        getAnimals();
        //alert("oii")
    }, [])

    const getAnimals = async () => {
        //alert(`${local}/animals?limit=2`)
        try {               //trocar pra heroku ou local
            await axios.get(`${local}/animals?limit=2`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setAnimalsData(response.data)
                })
                .catch((e) => {
                    alert("Ocorreu um erro !" + e.response.data.message || e.response);
                    console.log(e);

                })

        } catch (e) {
            alert(e);
            console.log(e);
        }
    } 


    return (
        <SafeAreaView >
            <ScrollView >
                <Text style={Style.header}>
                    Home
                </Text>

                <Text>
                    {console.log(JSON.stringify(userData) + '' + isLogged)}
                </Text>



                <Text style={Style.title}>
                    Animais disponiveis para apadrinhamento
                </Text>

                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Apadrinhar', { item })}>
                            <AnimalCard data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={<ButtomCard onPress={() => navigation.navigate('Apadrinhar')} />}
                />


                <Text style={Style.title}>
                    Disponiveis para adoção
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Apadrinhar', { item })}>
                            <AnimalCard data={item} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                    ListFooterComponent={<ButtomCard onPress={() => navigation.navigate('Apadrinhar')} />}
                />

                <Text style={Style.title}>
                    Ongs disponiveis
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={animalsData}
                    renderItem={({ item }) => (
                        <OngCard data={item} />
                    )}
                    keyExtractor={item => item.id.toString()}
                />

                <Button icon=""
                    color='red'
                    mode='outlined'
                    onPress={() => toggleLogged()}
                >
                    <Text> Sair </Text>
                </Button>

            </ScrollView>

            <StatusBar />
        </SafeAreaView >
    );
}

function AnimalCard({ data, onPress }) {
    return (
        <View style={Style.card}>
            <Image style={Style.petImage}
                source={require('../../../assets/gato.png')}
            />

            <Text>
                {`${data.name}`}
            </Text>
        </View>
    )
}

function OngCard({ data }) {
    return (
        <View style={Style.card}>

            <Image style={Style.ongImage}
                source={require('../../../assets/gato.png')}
            />

            <Text>
                {`${data.name}`}
            </Text>
        </View>
    )
}

function ButtomCard({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={Style.card}>
                <Image style={Style.petImage}

                />

                <Text>
                    Ver mais
                </Text>
            </View>
        </TouchableOpacity>

    )
}