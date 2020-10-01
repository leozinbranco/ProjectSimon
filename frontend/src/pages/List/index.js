import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

import Style from './style';
import Card from '../../components/Card';
import Filter from '../../components/Filter/index';

import { api_token } from '../../constants/token.json';
import { local, heroku } from '../../constants/api_url.json'

export default function Lista({ route, navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [animalsData, setAnimalsData] = useState([]);

    function handleClick() {
        setModalVisible(!modalVisible);
    }

    useEffect(() => {
        getAnimals();
        //alert("oii")
    }, []);

    const getAnimals = async () => {
        try {
            
            axios.get(`${local}/animals`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));
                        setAnimalsData(response.data);
                        //console.log(animalsData);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }

    };




    return (
        <SafeAreaView >
            <ScrollView >
                <Text style={{ fontSize: 48, color: '#5A5A5A', padding: 10 }}>
                    Animais
                        </Text>

                <View style={Style.filterContainer}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleClick}>
                        <View style={Style.slider}>
                            <Feather name="sliders" size={24} color="black" />
                        </View>

                        <Text style={Style.filtreTitle}>
                            Filtros
                                        </Text>


                    </TouchableOpacity>
                </View>

                <Filter visible={modalVisible} handler={handleClick} />

                <View>



                    <View>
                        <TouchableOpacity style={Style.filtreText}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="window-close" size={17} color="black" />
                                <Text style={{ paddingLeft: 5, fontSize: 15 }}>
                                    Disponíveis para o Apadrinhamento
                                    </Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                </View>

                <View>

                    <FlatList
                        style={{ width: '100%' }}
                        data={animalsData}
                        renderItem={({ item }) => (

                            <Card data={item} onPress={() => navigation.navigate('PetProfile', { animal: item }, { id: item.id})} />

                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};







