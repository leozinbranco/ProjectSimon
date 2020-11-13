import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import {
    FlatList,
    TouchableOpacity
} from 'react-native-gesture-handler';
import {
    Button,
    IconButton,
    Colors,
    Caption,
    Card,
    Title
} from 'react-native-paper'
import axios from 'axios';
import { api_token } from '../../constants/token.json';
import { local, heroku } from '../../constants/api_url.json';
import { AuthContext } from '../../services/auth';
import Style from './style';

export default function Home({ navigation }) {

    const { userData, isLogged, toggleLogged } = React.useContext(AuthContext);

    const [animalsData, setAnimalsData] = useState([])
    const [ongsData, setOngsData] = useState([])


    //console.log(api_token);
    //alert(api_token);
    useEffect(() => {
        getAnimals();
        getOngs();
        //alert("oii")
    }, [])

    const getAnimals = async () => {
        //alert(`${local}/animals?limit=2`)
        try {               //trocar pra heroku ou local
            await axios.get(`${local}/animals?limit=2`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
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

    const getOngs = async () => {
        //alert(`${local}/animals?limit=2`)
        try {               //trocar pra heroku ou local
            await axios.get(`${local}/ongs?limit=2`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setOngsData(response.data)
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
        <SafeAreaView style={Style.container}>
            <ScrollView >

                <View style={Style.headContainer}>

                    <View style={Style.lineHeader}>
                        <IconButton
                            icon="menu"
                            color={Colors.white}
                            size={30}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    </View>

                    <Image
                        style={Style.Headerlogo}
                        source={require('../../../assets/logo.png')}
                    />

                    <Title style={Style.headerText}>
                        Bem-vindo,
                    </Title>


                    <Title style={Style.headerText}>
                        {userData.name}
                    </Title>

                </View>


                <View style={{ backgroundColor: 'white', height: 500 }}>

                    <Caption style={Style.title}>
                        Alguns animais que você pode ajudar 
                </Caption>
                    <FlatList
                        horizontal={true}
                        data={animalsData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate("Apadrinhar", { screen: 'PetProfile', params: {animal: item} } )} >
                                <AnimalCard data={item} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                        ListFooterComponent={<ButtomCard onPress={() => navigation.navigate('Apadrinhar', { screen: 'List'} )} />}
                    />


                    <Caption style={Style.title}>
                        Algumas das ONGs cadastradas 
                </Caption>


                    <FlatList
                        style={{ width: '100%' }}
                        horizontal={true}
                        data={ongsData}
                        renderItem={({ item }) => (
                            <OngCard data={item} />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>




            </ScrollView>

            <StatusBar backgroundColor={'#3FB55D'} />
        </SafeAreaView >
    );
}

function AnimalCard({ data, onPress }) {
    return (

        <Card style={Style.card} elevation={4} >
            <Card.Cover style={{ height: '50%' }} source={{ uri: data.image_url }} />
            <Card.Content style={{ paddingTop: 10 }}>
                <Title>{data.name} </Title>
                <Caption>{data.company_name}</Caption>
            </Card.Content>

        </Card>


    )
}

function OngCard({ data }) {
    return (


        <Card style={Style.card} elevation={4}>
            <Card.Cover style={{ height: '50%' }} source={{ uri: data.image_url }} />
            <Card.Content style={{ paddingTop: 10 }}>
                <Title>{data.name} </Title>
                <Caption>{data.company_name}</Caption>

            </Card.Content>

        </Card>
    )
}

function ButtomCard({ onPress }) {
    return (

        <Card style={Style.card} elevation={4} onPress={onPress}>
            <Card.Content style={{ paddingTop: 10 }}>
                <IconButton
                    icon="plus-box-outline"
                    color={Colors.red500}
                    size={20}
                    onPress={() => console.log('Pressed')}
                    style={{ height: '20%' }}
                />
                <Title>Veja mais </Title>
                <Caption>Ver mais animais que você pode ajudar</Caption>
            </Card.Content>

        </Card>
    )
}