import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default function Reportar({ route, navigation }) {
    const { animal }  = route.params || {}

    return (
        <>
            <SafeAreaView>
                <Text>
                    Perfil do pet {JSON.stringify(animal)}
                </Text>

            </SafeAreaView>

        </>);
}


