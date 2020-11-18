import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, ImageBackground, Image } from 'react-native'
import { TextInput, Text, Card, Caption, Button, FAB, Switch } from 'react-native-paper'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ImagePicker from '../../components/ImgPicker';
import axios from 'axios';

import { AuthContext } from '../../services/auth';

import Style from './style'

export default function PetRegister({ navigation }) {

    const { userData } = React.useContext(AuthContext);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [gender, setGender] = useState('')
    const [breed, setBreed] = useState('')
    const [color, setColor] = useState('')
    const [age, setAge] = useState('')
    const [availableForAdoption, setAvailableForAdoption] = useState()

    const parseBody = () => {
        return {
            name,
            breed,
            color,
            description,
            available_for_adoption: availableForAdoption,
            available_for_patronize: 'S',
            type_id: type,
            ong_id: userData.id,
            age,
            gender
        }
    }

    const registerPet = () => {
        axios.post(url, {})
    }

    return (
        <SafeAreaView>
            <ScrollView>

                <ImageBackground style={Style.image} source={{ uri: '' }}>
                    <ImagePicker />
                </ImageBackground>

                <Card>
                    <Card.Content>
                        <Caption> Nome </Caption>
                        <TextInput
                            label={"Nome do animal"}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            left={<TextInput.Icon name="tag" />}
                        >
                        </TextInput>
                    </Card.Content>
                    <Card.Content>
                        <Caption> Sobre </Caption>
                        <TextInput
                            label={"Diga um pouco sobre o animal"}
                            multiline={true}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            left={<TextInput.Icon name="pencil" />}

                        >
                        </TextInput>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Caption>Tipo do animal</Caption>
                        <Button
                            mode="outlined"
                        >
                            Tipos
                                </Button>
                    </Card.Content>

                    <Card.Content>
                        <Caption>Genero</Caption>
                        <Button
                            mode="outlined"
                        >
                            Macho
                                </Button>
                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <FontAwesome5 name="paw" size={20} color="black" />
                        <TextInput
                            label={"Raça do animal"}
                            style={Style.input}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                        >
                        </TextInput>
                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <FontAwesome5 name="info-circle" size={20} color="black" />
                        <TextInput
                            label={"Cor do animal"}
                            style={Style.input}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                        >
                        </TextInput>
                    </Card.Content>


                    <Card.Content style={Style.line}>
                        <FontAwesome name="heart-o" size={20} color="black" />
                        <TextInput
                            label={"Idade"}
                            style={Style.input}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                        >
                        </TextInput>
                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <Image
                            source={require('../../../assets/ong.png')}
                            style={Style.logo}
                        />
                        <Caption> ONG • {userData.company_name}</Caption>
                    </Card.Content>

                </Card>

            </ScrollView>


            <FAB
                style={Style.fab}
                icon="check"
                onPress={() => console.log('Pressed')}
            />
        </SafeAreaView>
    );
}




