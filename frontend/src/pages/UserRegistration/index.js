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
moment.locale('pt-br');

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
    const goNextPage = () => navigation.navigate('Profile'); // nao tem profile
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cep, setCep] = useState('');
    const [birthdate, setBirthdate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [img, setImg] = useState({});
    const [pressed, setPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setBirthdate(currentDate);
    };

    useEffect((visible) => {
        // Atualiza o titulo do documento usando a API do browser
        setModalVisible(visible);
    });

    const createAccount = async (name, email, password, whatsapp, cep, birthdate) =>{
        try{
            await axios.post('http://200.236.192.242:3000/users', {
                name: name,
                email: email,
                password: password,
                whatsapp: whatsapp,
                cep: cep,
                born_date: birthdate,
                bio: null,
            })
            .then((response) =>{
                console.log(response);
                goNextPage;
            })
            .catch((e) =>{
                alert("Ocorreu um erro no cadastro!");
            
            })
            
        }catch(e){
            alert(e);
        }
        
    }



    return (

        <SafeAreaView style={Style.container}>

            <Text style={Style.title}>Sobre você</Text>




            <ScrollView style={Style.formContainer} >
                <View style={Style.scroll}>
                    
                    <ImagePicker></ImagePicker>

                    <View style={Style.input}>
                        <Feather style={{ marginRight: 10 }} name="user" size={24} color="black" />
                        <TextInput
                            onChangeText={text => setName(text)}
                            value={name}
                            placeholder='Nome'
                            autoCompleteType='name'
                        />
                    </View>

                    <View style={Style.input}>
                        <Feather style={{ marginRight: 10, justifyContent: "center", alignContent: "center", alignItems: "center" }} name="mail" size={20} color="black" />
                        <TextInput
                            onChangeText={text => setEmail(text)}
                            value={email}
                            placeholder='Email'

                            autoCompleteType='email'
                            keyboardType='email-address'
                        />

                    </View>

                    <View style={Style.input}>
                        <AntDesign style={{ marginRight: 10 }} name="lock" size={24} color="black" />
                        <TextInput
                            onChangeText={text => setPassword(text)}
                            value={password}
                            placeholder='Senha'

                            autoCompleteType='password'
                            keyboardType='default'
                            secureTextEntry={true}

                        />
                    </View>

                    <View style={Style.input}>
                        <FontAwesome style={{ marginRight: 10 }} name="whatsapp" size={24} color="black" />
                        <TextInput
                            onChangeText={text => setWhatsapp(text)}
                            value={whatsapp}
                            placeholder='Whatsapp'

                            autoCompleteType='tel'
                            keyboardType='decimal-pad'
                        />



                    </View>

                    <View style={Style.input}>
                        <FontAwesome style={{ marginRight: 10 }} name="location-arrow" size={24} color="black" />
                        <TextInput
                            onChangeText={cep => setCep(cep)}
                            value={cep}
                            placeholder='CEP'

                            autoCompleteType="postal-code"
                            keyboardType='decimal-pad'
                        />
                    </View>

                    <View style={Style.input}>
                        <FontAwesome style={{ marginRight: 10 }} name="birthday-cake" size={20} color="black" />
                        <TouchableOpacity onPress={() => { setShow(!show) }}>
                            <Text style={{ fontSize: 15, justifyContent: 'center' }}>{moment(birthdate).format('L')}</Text>
                        </TouchableOpacity>

                    </View>



                    <TouchableOpacity style={Style.button} onPress={() => {createAccount(name,email,password,whatsapp,cep,birthdate)}} >
                        <Text style={{ color: 'white' }}> Confirmar </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>




            {show ? (<DateTimePicker
                testID="dateTimePicker"
                value={birthdate}
                mode={'date'}
                is24Hour={true}
                display="spinner"
                onChange={onChangeDate}
            />) : null}

        </SafeAreaView>
    );
}



