import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import List from '../routes/list.routes';
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
        tabBarLabel: 'Inicio',
        tabBarIcon: () => (
          <Feather name="home" size={24} color="white" />
        ),
      }}
    />
    <TabBottom.Screen name="Apadrinhar" component={List}
      options={{
        tabBarLabel: 'Apadrinhar',
        tabBarIcon: () => (
          <FontAwesome name="paw" size={24} color="white" />
        ),
      }}
    />
    <TabBottom.Screen name="Reportar" component={Reportar}
      options={{
        tabBarLabel: 'Reportar',
        tabBarIcon: () => (
          <Feather name="alert-triangle" size={24} color="white" />
        ),


      }}

    />
  </TabBottom.Navigator>
       
);


export default TabNavigator;