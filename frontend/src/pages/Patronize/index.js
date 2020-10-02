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
import { Picker } from '@react-native-community/picker';


export default function PetProfile({ route, navigation }) {
    const { animal } = route.params;

    const [valor, setValor] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    return (

        <SafeAreaView>
            <View>

                <Text> Pagina de apadrinhar </Text>

                <Text> {`Apadrinhar ${animal.name} e ajudar a ${animal.company_name} com `} </Text>


                <Picker
                    selectedValue={valor}
                    style={{ height: 50, width: '90%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setValor(itemValue)
                    }>
                    <Picker.Item label="R$10,00" value={10} />
                    <Picker.Item label="R$20,00" value={20} />
                    <Picker.Item label="R$30,00" value={30} />
                </Picker>


                <View>
                    <Text> Escolha um meio de pagamento</Text>

                    <Picker
                        selectedValue={paymentMethod}
                        style={{ height: 50, width: '90%' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setPaymentMethod(itemValue)
                        }>
                        <Picker.Item label="Cartão de credito" value={10} />
                    </Picker>

                </View>


            </View>

        </SafeAreaView>)

}