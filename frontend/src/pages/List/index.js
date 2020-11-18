import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
} from 'react-native';
import {
    Paragraph,
    Caption,
    Text,
    Title,
    Chip,
    Appbar,
    Button
} from 'react-native-paper';

import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import Style from './style';
import Card from '../../components/Card';
import Filter from '../../components/Filter/index';

import { api_token } from '../../constants/token.json';
import { local, heroku } from '../../constants/api_url.json'

export default function Lista({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [animalsData, setAnimalsData] = useState([]);

    const [availableForPatronize, setAvailableForPatronize] = useState(true);
    const [availableForAdoption, setAvailableForAdoption] = useState(true);

    function handleClick() {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        getAnimals();
        console.log(navigation)
        console.log(route)
    }, []);

    const getAnimals = async () => {
        try {

            axios.get(`${local}/animals`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setAnimalsData(response.data);

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
        <SafeAreaView >
            <Filter visible={modalVisible} handler={handleClick} />

            <View>

                <FlatList
                    ListHeaderComponent={
                        <View>

                            <Appbar style={{ backgroundColor: '#3FB55D' }}>
                                <Appbar.Content title="Animais " color="white" />
                                <View style={Style.filterContainer}>
                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleClick}>
                                        <View style={Style.slider}>
                                            <Feather name="sliders" size={24} color="white" />
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            </Appbar>
                            {/*
                            <Caption>
                                Filtros selecionados
                            </Caption>

                            <Chip mode='flat'
                                icon={availableForPatronize ? 'check' : 'cancel'}
                                selected={availableForPatronize}
                                style={{ borderColor: 'orange', borderWidth: 1, backgroundColor: (availableForPatronize ? 'orange' : null) }}
                                onPress={() => setAvailableForPatronize(!availableForPatronize)}
                                textStyle={{ fontSize: 12, }}>
                                Disponivel para apadrinhar
                            </Chip>

                            <Chip
                                icon="close"
                                selected={availableForAdoption}
                                selectedColor="black"
                                onPress={() => setAvailableForAdoption(!availableForAdoption)}

                            >
                                Disponíveis para Adoção
                            </Chip> */}

                        </View>

                    }

                    style={{ width: '100%' }}
                    data={animalsData}
                    renderItem={({ item }) => (

                        <Card data={item} onPress={() => navigation.navigate('PetProfile', { animal: item }, { id: item.ong_id })} />

                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>

        </SafeAreaView >
    );
};







