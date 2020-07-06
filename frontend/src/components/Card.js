import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Card({ data }) {
    return (
        <TouchableOpacity style={Style.card}>

            <Text style={Style.title}>
                {`${data.name}`}
            </Text>

            <Image
                source={require('../../assets/gato.png')}
            />

            <Text >
                Descrição
            </Text>


        </TouchableOpacity>
    )
}


const Style = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: "column",
        //backgroundColor: '#3FB55D',
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"

    }
});
