import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, ImageBackground, Image, Alert } from 'react-native'
import { TextInput, Text, Card, Caption, Button, FAB, Switch, RadioButton, Checkbox, Divider, Dialog, Portal } from 'react-native-paper'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ImagePicker from '../../components/ImgPicker';
import getRandomAnimalImage from '../../utils/RandomAnimalImage'
import SelectAnimalTypes from '../../components/AnimalTypes'
import * as Location from 'expo-location';
import { local } from '../../constants/api_url.json'
import { azure } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'
import Geocoder from 'react-native-geocoding';
import { API_GOOGLE_KEY } from '../../constants/token.json'

import axios from 'axios';

import { AuthContext } from '../../services/auth';

import Style from './style'
export default function ReportPage({ navigation }) {

    const { userData } = React.useContext(AuthContext);
    
    const [animalTypesModal, setAnimalTypesModal] = useState(false)
    const [animalTypes, setAnimalTypes] = useState('')
    const [animalType, setAnimalType] = useState('')
    const [animalTypeId, setAnimalTypeId] = useState(0)
    const [image, setImage] = useState(' ')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [isMyLocation, setIsMyLocation] = useState(false);
    const [address, setAddress] = useState('');
    const [visible, setVisible] = useState(false);
    const hideDialog = () => setVisible(false);

    Geocoder.init(API_GOOGLE_KEY);


    const parseBody = () => {

        return {
            title,
            desc: description,
            id_animal_type: animalTypeId,
            status: 'A',
            map_long: long,
            map_lati: lat,
            priority
        }

    }
    //?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${API_GOOGLE_KEY}
    const convertAddressToLatLng = async () => {
        Geocoder.from(address)
            .then(json => {
                var location = json.results[0].geometry.location;
                setLat(location.lat);
                setLong(location.lng);
                setAddress(json.results[0].formatted_address);
                setVisible(true);
            })
                .catch(error => { 
                    //alert(JSON.stringify(error))
                    alert("Ocorreu um erro ao verificar o endereço! Tente algo mais específico.");
                }
            )

    };

    const getAnimalTypes = () => {
        axios.get(`${azure}/animals_types`, { headers: { Authorization: `Bearer ${api_token}` } }
        ).then(result => {
            setAnimalTypes(result.data)
        }).catch(err => console.log(err.message));
    }

    const toggleSelectAnimalTypeModal = () => {
        setAnimalTypesModal(!animalTypesModal)
    }

    const setAnimalTypeHandler = (selected_type) => {
        setAnimalType(selected_type.type_name)
        setAnimalTypeId(selected_type.id)
        toggleSelectAnimalTypeModal()
    }

    const _getLocationAsync = async () => {
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

    const registerReport = async () => {
        console.log("chamou")
        try{
            await axios.post(`${local}/reports`, parseBody(), { headers: { Authorization: `Bearer ${api_token}` } })
                .then(result => {
                    console.log(result.data)
                    alert("Sucesso! Reporte cadastrado com sucesso!");
                })
                .catch(err => console.log(err));
        }catch(e){
            console.log(e);
        }
    }

    const renderDialog = () => {
        return (
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Content>
                        <Text style={{fontSize:18}}>
                            O Endereço para reportar é:   
                            
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize:16}}>{address}?</Text>

                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => { setAddress(''); hideDialog() }}>Cancel</Button>
                        <Button onPress={() => { registerReport(); hideDialog() }}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        );
    }



    const fetchData = async () => {
        setImage(await getRandomAnimalImage())
        getAnimalTypes()
    }

    useEffect(() => {
        isMyLocation ? _getLocationAsync : null
        fetchData()
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>

            <SelectAnimalTypes visible={animalTypesModal} selectedTypeHandler={setAnimalTypeHandler} data={animalTypes} closeModal={toggleSelectAnimalTypeModal} />

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
                            left={<TextInput.Icon name="alert" />}
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
                <Divider />
                    <Card.Content>
                        <Caption style={{marginTop:10}}>Tipo do animal</Caption>
                        <Button
                            style={{marginBottom:20, marginTop:10}}
                            mode="outlined"
                            onPress={() => toggleSelectAnimalTypeModal()}
                        >
                            {animalType || 'Selecione um tipo'}
                        </Button>
                    </Card.Content> 
                    
                    <Divider />
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

                {renderDialog()}

            </ScrollView>


            <FAB
                style={Style.fab}
                icon="check"
                onPress={() => convertAddressToLatLng()}
            />
        </SafeAreaView>
    );
}




