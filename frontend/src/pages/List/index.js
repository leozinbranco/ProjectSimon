import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Style from './style';
import Card from '../../components/Card';
import Filter from '../Filter';

const fake_data = [
    { id: 1, name: 'Poliano', ong: 'COTUCA' },
    { id: 2, name: 'Poliano', ong: 'COTUCA'  },
    { id: 3, name: 'Poliano', ong: 'COTUCA'  },
]

const Stack = createStackNavigator(); 

 function Lista({navigation}) {
    return (
        <>
            <SafeAreaView >
                        <ScrollView >
                        <Text style={{fontSize:48, color:'#5A5A5A', padding:10}}>
                            Animais
                        </Text>

                        <View style={Style.filterContainer}>
                            <TouchableOpacity style={{flexDirection:'row'}}  onPress={() => navigation.navigate('Filter')}>
                                    <View style={Style.slider}> 
                                        <Feather name="sliders" size={24} color="black"/> 
                                    </View>
                                    
                                        <Text style={Style.filtreTitle}>
                                        Filtros
                                        </Text>
                                    
                                    
                            </TouchableOpacity>
                        </View>
                                
                        
                        
                        <View> 

                            
                        
                        <View>
                            <TouchableOpacity style={Style.filtreText}>
                                
                                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
                                    <MaterialCommunityIcons name="window-close" size={17} color="black" /> 
                                    <Text style={{paddingLeft: 5, fontSize: 15 }}>
                                    Disponíveis para o Apadrinhamento 
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.filtreText}>
                                
                                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
                                    <MaterialCommunityIcons name="window-close" size={17} color="black" /> 
                                    <Text style={{paddingLeft: 5, fontSize: 15 }}>
                                    Disponíveis para o Apadrinhamento 
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={Style.filtreText}>
                                
                                <View style={{alignItems: 'center', justifyContent: 'center', flexDirection:'row'}}>
                                    <MaterialCommunityIcons name="window-close" size={17} color="black"/> 
                                    <Text style={{paddingLeft: 5, fontSize: 15}}>
                                    Disponíveis para o Apadrinhamento 
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                            


                        </View>
                        
                        <View>
                            <FlatList
                                style={{ width: '100%' }}
                                data={fake_data}
                                renderItem={({ item }) => (
                                    <Card data={item}
                                    />)}
                                keyExtractor={item =>  item.id.toString()}
                            />
                        </View>
                        
                </ScrollView>
            </SafeAreaView>
        </>);
};

    function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="Lista" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Filter" component={Filter} screenOptions={{ headerShown: true }}/>
                <Stack.Screen name="Lista" component={Lista} />
            </Stack.Navigator>
        </NavigationContainer>
    );
    }

export default App;



