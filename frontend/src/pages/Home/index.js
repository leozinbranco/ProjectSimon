import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import Style from './style'

const fake_data = [
    { id: 1, name: 'Poliano' },
    { id: 2, name: 'Poliano' },
    { id: 3, name: 'Poliano' },
]

export default function Home() {

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={Style.header}>
                    Home
                </Text>

                <Text style={Style.title}>
                    Animais disponiveis para apadrinhamento
                </Text>
                
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={fake_data}
                    renderItem={({ item }) => (
                        <AnimalCard data={item}
                        />)}
                    keyExtractor={item =>  item.id.toString()}
                />


                <Text style={Style.title}>
                    Disponiveis para adoção
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={fake_data}
                    renderItem={({ item }) => (
                        <AnimalCard data={item}
                        />)}
                    keyExtractor={item =>  item.id.toString()}
                />

                <Text style={Style.title}>
                    Ongs perto de você
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={fake_data}
                    renderItem={({ item }) => (
                        <OngCard data={item}
                        />)}
                    keyExtractor={item => item.id.toString()}
                />

            </ScrollView>

            <StatusBar />
        </SafeAreaView >
    );
}

function AnimalCard({ data }) {
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