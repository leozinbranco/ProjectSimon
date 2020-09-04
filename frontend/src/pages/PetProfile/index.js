import React from 'react';
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

import Style from '../PetProfile/style';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function PetProfile({ route, navigation }) {
    const { animal } = route.params;
    alert(JSON.stringify(animal));
    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    <Text style={Style.nameAnimal}>
                        {animal.name}
                    </Text>

                    <Image style={Style.image}
                        source={require('../../../assets/gato.png')}
                    />
                </View>

                <View>
                    <View style={Style.bioPetContainer}>
                        <Text style={Style.bioCont}>{animal.bio}</Text>
                    </View>

                    <View style={Style.infoPetContainer}>

                        <View style={Style.line}>
                            <Image
                                source={require('../../../assets/ong.png')}
                                style={Style.logo}
                            />
                            <Text style={Style.textInfo}>ONG • {animal.ong}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="dog" size={20} color="black" />
                            <Text style={Style.textInfo}>Tipo • {animal.type}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome name="paw" size={20} color="black" />
                            <Text style={Style.textInfo}>Cor • {animal.color}</Text>
                        </View>

                        <View style={Style.line}>
                            {animal.disp ? <AntDesign name="check" size={20} color="black" /> : <AntDesign name="close" size={24} color="black" />}
                            <Text style={Style.textInfoLong}>Disponivel para adoção</Text>
                        </View>

                        <View style={Style.line}>
                            <Text style={Style.textInfo}>Idade • Adulto</Text>
                        </View>


                    </View>

                    <TouchableOpacity style={Style.button}>

                    </TouchableOpacity>

                </View>




            </ScrollView>
        </SafeAreaView>

    );
}


