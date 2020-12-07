import React from 'react'
import { View, TouchableOpacity, FlatList, Image, } from 'react-native'
import { IconButton, Divider, Text, Avatar, Title, Caption, Button } from 'react-native-paper';
import Modal from 'react-native-modal';


export default function SuccessModal({ visible, closeModal }) {


    return (
        <Modal
            isVisible={visible}
            style={{backgroundColor: '#3FB55D'}}
        >
            <View style={{  backgroundColor: '#3FB55D', width: '100%',height: '60%', marginTop: 10, alignItems: 'center'  }}>

                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingVertical: 20 }}>Apadrinhamento feito com sucesso!</Text>

                <Avatar.Image source={require('../../../assets/success.png')} size={250} style={{ backgroundColor: 'white' }} />

            </View>
            <View style={{ backgroundColor: 'white', width: '100%', height: '40%', paddingTop: 20 }}>


                <Caption style={{ fontWeight: 'bold', textAlign: 'center' }}>Obrigado pelo seu apoio!
                Você acaba de garantir não só ao bixinho apadrinhado mas à todos os animais resgatados pela ONG,
                alimento, medicamentos, vacinas e materias de limpeza para que os eles fiquem feliz e saudaveis
                 </Caption>

                 <Button  mode="outlined" onPress={() => closeModal()} color="green" style={{margin: 10}}>
                    UHUU! 
                 </Button>

            </View>


        </Modal >

    )
}