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

            <View style={Style.container}>
                <Image source={require('../../assets/ong.png')} style={Style.image}></Image>
                <Text style={Style.bottomText}>
                ONG • {data.ong} 
                </Text >
            </View>

        </TouchableOpacity>
    )
}


const Style = StyleSheet.create({
    card: {
        flex: 1, // <- ocupa o máximo de tamanho possível do elemento pai
        flexDirection: "column",
        //backgroundColor: '#3FB55D',
        margin: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",

    },
    bottomText: {
        color : '#606060',
        opacity: 0.8,
        textAlign: 'left', 
        textAlignVertical: 'center',
        padding: 5, 
        paddingLeft: 10, 
    },
    image: { 
        justifyContent: 'center',
        resizeMode: 'contain', 
        width: 21,
        height: 24,
        
        
    },
    container: {
        flexDirection: 'row',
        marginTop: 5,
    },  

    
    
});
