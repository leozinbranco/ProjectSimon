import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';

import Style from '../PetProfile/style'

export default function Reportar({ route, navigation }) {
    const { animal } = route.params || {}

    return (
        <SafeAreaView>
            <Text>
                Perfil do pet {JSON.stringify(animal)}
            </Text>

            <Image style={Style.image}
                //source={require('../../../assets/gato.png')}
            />

        </SafeAreaView>

    );
}


