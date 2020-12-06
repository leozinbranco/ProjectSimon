import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import List from '../routes/list.routes';
import Reportar from '../pages/Reportar';
import Drawer from '../routes/drawer.routes';

import Style from './tabsStyle';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const TabBottom = createBottomTabNavigator(); //menu inferior

const TabNavigator = ({ route, navigation }) => (

  <TabBottom.Navigator tabBarOptions={{
    style: Style.navigator,
    inactiveTintColor: 'white',
    safeAreaInsets: {
      bottom: 0,
      top: 0
    },
  }}>
    <TabBottom.Screen name="Home" component={Drawer}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: () => (
          <Feather name="home" size={24} color="white" />
        ),
      }}
    />
    <TabBottom.Screen name="Apadrinhar" component={List} props={{ route, navigation }}
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