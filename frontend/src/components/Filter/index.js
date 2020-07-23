import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Modal,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
/*import { Feather } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';*/


import Style from './style';

const fake_data = [
    { id: 1, name: 'Poliano' },
    { id: 2, name: 'Poliano' },
    { id: 3, name: 'Poliano' },
]



export default function Filter({ visible, handler }) {
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        setModalVisible(visible);
    });

    function handleClick() {
        setModalVisible(false);
    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                handler();
            }}
        >

            <View style={Style.inside_container}>
                <View style={Style.headerText}>

                    <TouchableOpacity onPress={handler}>
                        <Text style={{ color: '#5A5A5A', fontSize: 18 }}> Cancelar</Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#5A5A5A', fontSize: 25, marginHorizontal: 40 }}> Filtrar</Text>

                    <TouchableOpacity >
                        <Text style={{ color: '#5A5A5A', fontSize: 18 }}> Limpar</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView>
                    <Text style={{ fontWeight: 'bold', padding: 25, paddingBottom: 10 }}>Idade</Text>


                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>


                    <Text style={{ fontWeight: 'bold', padding: 25, paddingBottom: 10 }}>Idade</Text>


                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>


                    <Text style={{ fontWeight: 'bold', padding: 25, paddingBottom: 10 }}>Idade</Text>


                    <View style={{ flex: 1, alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.selectFilter} >
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: '#484848', opacity: 0.8 }}>
                                        Exemplo
                                </Text>
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>
                </ScrollView>

                <TouchableOpacity style={Style.applyBtn}>
                    <Text style={{ color:'#FFFF', fontSize: 20, textAlign: 'center' }}>Aplicar</Text>
                </TouchableOpacity>

            </View>

        </Modal>
    );
}