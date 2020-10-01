import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function PetProfile({ route, navigation }) {
    const { animal } = route.params;


    return (

        <SafeAreaView>
            <View>

                <Text> Pagina de apadrinhar </Text>

                <Text> {`Apadrinhar ${animal.name} e ajudar a ${animal.company_name} com `} </Text>
                <Text> R$10,00 </Text>
                <Text> R$20,00 </Text>
                <Text> R$30,00 </Text>

                <View>
                    <Text> Escolha um meio de pagamento</Text>

                </View>


            </View>

        </SafeAreaView>)

}