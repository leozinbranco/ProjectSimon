import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import Style from './style'

const fake_data = [
    { id: 1, name: 'Sabrino' },
    { id: 2, name: 'Sabrino' },
    { id: 3, name: 'Sabrino' },
]

export default function Home() {

    return (
        <SafeAreaView>
            <ScrollView>
                <Text style={Style.header}>
                    Home
                    </Text>

                <View>
                    <Text>
                        Talvez alguma campanha
                        </Text>
                </View>


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
                    keyExtractor={item => item.id}
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
                    keyExtractor={item => item.id}
                />

                <Text style={Style.title}>
                    Ongs perto de você
                </Text>
                <FlatList
                    style={{ width: '100%' }}
                    horizontal={true}
                    data={fake_data}
                    renderItem={({ item }) => (
                        <AnimalCard data={item}
                        />)}
                    keyExtractor={item => item.id}
                />

            </ScrollView>

            <StatusBar/>
        </SafeAreaView >
    );
}

function AnimalCard({data}) {
    return (
        <View style={Style.animalCard}>
            <View style={Style.petImage}>
            </View>
            <Text>
                {`${data.name}`}
            </Text>
        </View>
    )
}