import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
} from 'react-native';
import ImagePicker from '../../components/ImgPicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather, FontAwesome, AntDesign } from '@expo/vector-icons';
import Style from './style';
import axios from 'axios';
import moment from 'moment';

import { api_token } from '../../constants/token.json'


moment.locale('br');

function ModalAlert() {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                handler();
            }}
        />
    );
}

export default function Register({ navigation }) {
    const backToLoginPage = () => navigation.navigate('Login');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cep, setCep] = useState('');
    const [birthdate, setBirthdate] = useState(new Date(1598051730000));

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [show, setShow] = useState(false);
    const [img, setImg] = useState({});
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || birthdate;
        setShowDatePicker(!showDatePicker);
        setBirthdate(currentDate);
    };


    const createAccount = async () => {

        try {
            await axios.post('http://192.168.0.5:3000/users', {
                name,
                email,
                password,
                whatsapp,
                cep,
                born_date: birthdate,
                bio: null,
            }, 
            {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    alert(JSON.stringify(response.data));
                    backToLoginPage();
                })
                .catch((e) => {
                    alert("Ocorreu um erro no cadastro!" + e.response.data.message);


                })

        } catch (e) {
            alert(e);
        }

    }



    return (

        <SafeAreaView style={Style.container}>

            <Text style={Style.title}>Sobre você</Text>

            <ScrollView style={Style.formContainer} >
                <View style={Style.scroll}>

                    <ImagePicker></ImagePicker>

                    <View style={Style.inputContainer}>
                        <Feather style={{ marginRight: 10 }} name="user" size={24} color="grey" />
                        <TextInput
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholder='Nome'
                            autoCompleteType='name'
                            style={Style.input}
                        />
                    </View>

                    <View style={Style.inputContainer}>
                        <Feather style={{ marginRight: 10 }} name="mail" size={20} color="grey" />
                        <TextInput
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder='Email'
                            autoCompleteType='email'
                            keyboardType='email-address'
                            style={Style.input}
                        />

                    </View>

                    <View style={Style.inputContainer}>
                        <AntDesign style={{ marginRight: 10 }} name="lock" size={24} color="grey" />
                        <TextInput
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder='Senha'
                            autoCompleteType='password'
                            keyboardType='default'
                            secureTextEntry={true}
                            style={Style.input}
                        />
                    </View>

                    <View style={Style.inputContainer}>
                        <FontAwesome style={{ marginRight: 10 }} name="whatsapp" size={24} color="grey" />
                        <TextInput
                            onChangeText={text => setWhatsapp(text)}
                            value={whatsapp}
                            placeholder='Whatsapp'
                            autoCompleteType='tel'
                            keyboardType='decimal-pad'
                            maxLength={11}
                            style={Style.input}
                        />

                    </View>

                    <View style={Style.inputContainer}>
                        <FontAwesome style={{ marginRight: 10 }} name="location-arrow" size={24} color="grey" />
                        <TextInput
                            onChangeText={cep => setCep(cep)}
                            value={cep}
                            placeholder='CEP'
                            autoCompleteType="postal-code"
                            keyboardType='decimal-pad'
                            maxLength={8}
                            style={Style.input}
                        />
                    </View>

                    <View style={Style.inputContainer}>
                        <FontAwesome style={{ marginRight: 10 }} name="birthday-cake" size={20} color="grey" />


                        <TouchableOpacity
                            onPress={() => {
                                setShowDatePicker(!showDatePicker)
                            }}
                            style={Style.dateInput}
                        >

                            <Text >
                                {'  ' + moment(birthdate).format('DD/MM/YYYY')}
                            </Text>
                        </TouchableOpacity>

                    </View>



                    <TouchableOpacity style={Style.button} onPress={() => { createAccount() }} >
                        <Text style={{ color: 'white' }}> Confirmar </Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>


            {showDatePicker ? (<DateTimePicker
                testID="dateTimePicker"
                value={birthdate}
                mode={'date'}
                is24Hour={true}
                display="spinner"
                onChange={onChangeDate}
                style={{ backgroundColor: 'white' }}
            />) : null}

        </SafeAreaView>
    );
}



