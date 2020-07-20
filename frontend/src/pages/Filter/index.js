import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-gesture-handler';


import Style from './style';

const fake_data = [
    { id: 1, name: 'Poliano' },
    { id: 2, name: 'Poliano' },
    { id: 3, name: 'Poliano' },
]

export default function Filter({navigation}) {

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.inside_container}>
                <View style={Style.headerText}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Lista')}>
                        <Text style={{color: '#5A5A5A', fontSize: 18}}> Cancelar</Text>    
                    </TouchableOpacity>
                    
                        <Text style={{color: '#5A5A5A', fontSize: 25, marginHorizontal: 60}}> Filtrar</Text>    
                    
                    <TouchableOpacity >
                        <Text style={{color: '#5A5A5A', fontSize: 18}}> Limpar</Text>    
                    </TouchableOpacity>
                    
                </View>


                <Text style={{fontWeight: 'bold', padding: 25, paddingBottom: 25}}>Idade</Text>


                <View style={{flex:1,justifyContent: 'space-around',marginTop:100}}>
                    <View style={{flexDirection:'row', marginLeft: 20}}>
                        
                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8}}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row', marginLeft: 20}}>
                        
                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row', marginLeft: 20}}>
                        
                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={Style.selectFilter} >
                            <View style={{flex:1, alignItems: 'center', justifyContent: 'center', flexDirection:'row', alignSelf: 'center'}}> 
                                <Text style={{textAlign: 'center', color: '#484848', opacity: 0.8   }}>
                                    Exemplo
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </SafeAreaView >
    );
}