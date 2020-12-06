import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, ImageBackground, Image, Alert } from 'react-native'
import { TextInput, Text, Card, Caption, Button, FAB, Switch, RadioButton, Checkbox, Divider } from 'react-native-paper'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ImagePicker from '../../components/ImgPicker';
import getRandomAnimalImage from '../../utils/RandomAnimalImage'
import SelectAnimalTypes from '../../components/AnimalTypes'
import * as Location from 'expo-location';
import { local } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'
import {API_GOOGLE_KEY} from '../../constants/token.json'

import axios from 'axios';

import { AuthContext } from '../../services/auth';

import Style from './style'

export default function ReportPage({ navigation }) {

    const { userData } = React.useContext(AuthContext);

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [isMyLocation, setIsMyLocation] = useState(false);
    const [address, setAddress] = useState('');


    const parseBody =  () => {

        return {
            title,
            description,
            register_date: new Date().getDate(),
            description,
            status: 'A',
            long,
            lat,
            priority
        }

    }

    const convertAddressToLatLng = async () => {
        await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${API_GOOGLE_KEY}`, parseBody(), { headers: { Authorization: `Bearer ${api_token}` }})
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err.response.data));
    };

    const _getLocationAsync = async () => {
        _getReportsLocation();
        let gpsServiceStatus = await Location.hasServicesEnabledAsync();

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted' && gpsServiceStatus) {
            const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            setLat(location.coords.latitude);
            setLong(location.coords.longitude);


            setLoading(false);
        } else {

            alert("Ocorreu um erro ! Autorize o aplicativo para acessar a localização!");
        }

    };

    const registerPet = async () => {
        await axios.post(`${local}/reports`, parseBody(), { headers: { Authorization: `Bearer ${api_token}` }})
        .then(result => {
            navigation.pop();
            alert("Sucesso! Animal cadastrado com sucesso!");
        })
        .catch(err => console.log(err.response.data));
    }


    


    const fetchData = async () => {
        setImage(await getRandomAnimalImage())
    }

    useEffect(() => {
        isMyLocation ? _getLocationAsync : null
        fetchData()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>


                <ImageBackground style={Style.image} source={{ uri: image }}>
                    <ImagePicker style={{ opacity: 0 }} />
                </ImageBackground>

                <Card>
                    <Card.Content>
                        <Caption> Título da Denúncia </Caption>
                        <TextInput
                            label={"Título"}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            left={<TextInput.Icon name="tag" />}
                            onChangeText={text => setTitle(text)}
                        >
                        </TextInput>
                    </Card.Content>
                    <Card.Content>
                        <Caption> Descrição </Caption>
                        <TextInput
                            label={"Descreva como o animal está"}
                            multiline={true}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            left={<TextInput.Icon name="pencil" />}
                            onChangeText={text => setDescription(text)}

                        >
                        </TextInput>
                    </Card.Content>
                </Card>
                <Card>

                    <Card.Content>
                        <Caption>Prioridade</Caption>
                        <RadioButton.Group onValueChange={newValue => setPriority(newValue)} value={priority}>
                            <View style={Style.line}>
                                <RadioButton value="urgente" />
                                <Text>Urgente</Text>
                            </View>
                            <View style={Style.line}>
                                <RadioButton value="moderado" />
                                <Text>Moderado</Text>
                            </View>
                        </RadioButton.Group>
                    </Card.Content>
                    <Divider />
                    <Card.Content style={Style.line}>
                        <FontAwesome name="address-card" size={22} color="black" />
                        <TextInput
                            label={"Endereço aproximado"}
                            style={Style.input}
                            disabled={isMyLocation}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            onChangeText={text => setAddress(text)}

                        >
                        </TextInput>
                    </Card.Content>
                    <Card.Content style={Style.line}>
                        <Checkbox
                            status={isMyLocation ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsMyLocation(!isMyLocation);
                            }}
                        />
                        <Caption> Usar minha localização </Caption>

                    </Card.Content>


                    
                    

                </Card>

            </ScrollView>


            <FAB
                style={Style.fab}
                icon="check"
                onPress={() => registerPet()}
            />
        </SafeAreaView>
    );
}




