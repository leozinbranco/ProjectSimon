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

import Style from './style';
import Card from '../../components/Card';

const fake_data = [
    { id: 1, name: 'Poliano', ong: 'COTUCA' },
    { id: 2, name: 'Poliano', ong: 'COTUCA'  },
    { id: 3, name: 'Poliano', ong: 'COTUCA'  },
]


export default function Lista({sexo}) {

    return (
        <>
            <SafeAreaView>
                <Text>
                {sexo}
                </Text>

                <FlatList
                    style={{ width: '100%' }}
                    data={fake_data}
                    renderItem={({ item }) => (
                        <Card data={item}
                        />)}
                    keyExtractor={item =>  item.id.toString()}
                />


            </SafeAreaView>
        </>);
}


