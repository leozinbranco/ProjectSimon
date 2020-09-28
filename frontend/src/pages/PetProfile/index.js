import React, {useState, useEffect} from 'react';
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



export default function PetProfile({ route, navigation, id }) {
    const [pet, setPet] = useState({});

    const { animal } = route.params;
    alert(JSON.stringify(animal));

    useEffect(() => {
        getPet();
        //alert("oii")
    }, []);

    const getPet = async (id) => {
        try {
            axios.get('https://api-tcc-simon.herokuapp.com/animals/' + id, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    //console.log("Response>>> : " + JSON.stringify(response.data));
                        setAnimalsData(response.data);
                        alert(animalsData);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }
    
    };

    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    <Text style={Style.nameAnimal}>
                        {pet.name}
                    </Text>

                    <Image style={Style.image}
                        source={require('../../../assets/gato.png')}
                    />
                </View>

                <View>
                    <View style={Style.bioPetContainer}>
                        <Text style={Style.bioCont}>{pet.description}</Text>
                    </View>

                    <View style={Style.infoPetContainer}>

                        <View style={Style.line}>
                            <Image
                                source={require('../../../assets/ong.png')}
                                style={Style.logo}
                            />
                            <Text style={Style.textInfo}>ONG • {pet.company_name}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome5 name="dog" size={20} color="black" />
                            <Text style={Style.textInfo}>Tipo • {pet.type}</Text>
                        </View>

                        <View style={Style.line}>
                            <FontAwesome name="paw" size={20} color="black" />
                            <Text style={Style.textInfo}>Cor • {pet.color}</Text>
                        </View>

                        <View style={Style.line}>
                            {pet.disp ? <AntDesign name="check" size={20} color="black" /> : <AntDesign name="close" size={24} color="black" />}
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


