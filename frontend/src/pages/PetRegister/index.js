import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, ImageBackground, Image, Alert } from 'react-native'
import { TextInput, Text, Card, Caption, Button, FAB, Switch, RadioButton, Checkbox, Divider } from 'react-native-paper'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import ImagePicker from '../../components/ImgPicker';
import getRandomAnimalImage from '../../utils/RandomAnimalImage'
import SelectAnimalTypes from '../../components/AnimalTypes'
import { local } from '../../constants/api_url.json'
import { azure } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'

import axios from 'axios';

import { AuthContext } from '../../services/auth';

import Style from './style'

export default function PetRegister({ navigation }) {

    const { userData } = React.useContext(AuthContext);

    const [animalTypesModal, setAnimalTypesModal] = useState(false)
    const [animalTypes, setAnimalTypes] = useState('')
    const [animalType, setAnimalType] = useState('')
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [gender, setGender] = useState('')
    const [breed, setBreed] = useState('')
    const [color, setColor] = useState('')
    const [age, setAge] = useState('')
    const [availableForAdoption, setAvailableForAdoption] = useState()

    const [dontKnowAge, setDontKnowAge] = React.useState(false);
    const [dontKnowBreed, setDontKnowBreed] = React.useState(false);

    const parseBody =  () => {

         return {
            name,
            breed: dontKnowBreed ?  'Desconhecida' : breed,
            color,
            description,
            available_for_adoption: availableForAdoption ? 'S' : 'N',
            available_for_patronize: 'S',
            type_id: animalType.id,
            ong_id: userData.id,
            age: dontKnowAge ? 0 : age,
            gender,
            image_url: image
        }

    }

    const registerPet = async () => {
        await axios.post(`${azure}/animals`, parseBody(), { headers: { Authorization: `Bearer ${api_token}` }})
        .then(result => {
            navigation.pop();
            alert("Sucesso! Animal cadastrado com sucesso!");
        })
        .catch(err => console.log(err.response.data));
    }

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
        setAnimalType(selected_type)
        toggleSelectAnimalTypeModal()
    }

    const fetchData = async () => {
        setImage(await getRandomAnimalImage())
        getAnimalTypes()
    }

    useEffect(() => {
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
                        <Caption> Nome </Caption>
                        <TextInput
                            label={"Nome do animal"}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            left={<TextInput.Icon name="tag" />}
                            onChangeText={text => setName(text)}
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
                            onChangeText={text => setDescription(text)}

                        >
                        </TextInput>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Caption>Tipo do animal</Caption>
                        <Button
                            mode="outlined"
                            onPress={() => toggleSelectAnimalTypeModal()}
                        >
                            {animalType.type_name || 'Selecione um tipo'}
                        </Button>
                    </Card.Content>

                    <Card.Content>
                        <Caption>Genero</Caption>
                        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                            <View style={Style.line}>
                                <RadioButton value="m" />
                                <Text>Macho</Text>
                            </View>
                            <View style={Style.line}>
                                <RadioButton value="f" />
                                <Text>Fêmea</Text>
                            </View>
                        </RadioButton.Group>
                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <FontAwesome5 name="paw" size={20} color="black" />
                        <TextInput
                            label={"Raça do animal"}
                            style={Style.input}
                            disabled={dontKnowBreed}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            onChangeText={text => setBreed(text)}

                        >
                        </TextInput>
                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <Checkbox
                            status={dontKnowBreed ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setDontKnowBreed(!dontKnowBreed);
                            }}
                        />
                        <Caption> Não tem/sei a raça </Caption>

                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <FontAwesome5 name="info-circle" size={20} color="black" />
                        <TextInput
                            label={"Cor do animal"}
                            style={Style.input}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                            onChangeText={text => setColor(text)}

                        >
                        </TextInput>
                    </Card.Content>


                    <Card.Content style={Style.line}>
                        <FontAwesome name="heart-o" size={20} color="black" />
                        <TextInput
                            label={"Idade"}
                            style={Style.input}
                            disabled={dontKnowAge}
                            theme={{
                                colors: { primary: 'green', underlineColor: 'white', selectioncolor: 'green', background: 'transparent' }
                            }}
                        >
                        </TextInput>

                    </Card.Content>

                    <Card.Content style={Style.line}>
                        <Checkbox
                            status={dontKnowAge ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setDontKnowAge(!dontKnowAge);
                            }}
                        />
                        <Caption> Idade desconhecida </Caption>

                    </Card.Content>

                    <Divider />

                    <Card.Content style={Style.line}>
                        <Checkbox
                            status={availableForAdoption ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setAvailableForAdoption(!availableForAdoption);
                            }}
                        />
                        <Caption>Esse animal também está disponivel para adoção</Caption>
                    </Card.Content>
                    <Divider />

                    
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
                onPress={() => registerPet()}
            />
        </SafeAreaView>
    );
}




