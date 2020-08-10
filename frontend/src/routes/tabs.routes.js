import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Apadrinhar from '../pages/List';
import Reportar from '../pages/Reportar';

import Style from './tabsStyle';

import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';


const TabBottom = createBottomTabNavigator(); //menu inferior



const TabNavigator = () => (

    
        <TabBottom.Navigator tabBarOptions={{
          style: Style.navigator,
          inactiveTintColor: 'white',
        }}>
          <TabBottom.Screen name="Home" component={Home} 
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
                <Feather name="home" size={24} color="white" />
              ),
            }}
          /> 
          <TabBottom.Screen name="Apadrinhar" children={()=><Apadrinhar nome={'Poliano'}/>} 
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
                <FontAwesome name="paw" size={24} color="white" />
              ),
            }}
          />
          <TabBottom.Screen name="Reportar" component={Reportar} 
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: () => (
                <Feather name="alert-triangle" size={24} color="white" />
              ),
              
              
            }}
            
          />
        </TabBottom.Navigator>
     
);


export default TabNavigator;