import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Apadrinhar from '../pages/List';
import Reportar from '../pages/Reportar';

const TabBottom = createBottomTabNavigator(); //menu inferior

const TabNavigator = () => (
  <TabBottom.Navigator tabBarOptions={{
    style: {backgroundColor: '#3FB55D', borderTopStartRadius: 20, borderTopEndRadius: 20},
    inactiveTintColor: 'white',
  }}>
    <TabBottom.Screen name="Home" component={Home} />
    <TabBottom.Screen name="Apadrinhar" children={()=><Apadrinhar sexo={'sexoi'}/>} />
    <TabBottom.Screen name="Reportar" component={Reportar} />
  </TabBottom.Navigator>
);


export default TabNavigator;