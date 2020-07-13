import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Apadrinhar from '../pages/List';
import Reportar from '../pages/Reportar';

import Style from './tabsStyle';

const TabBottom = createBottomTabNavigator(); //menu inferior

const TabNavigator = () => (
  <TabBottom.Navigator tabBarOptions={{
    style: Style.navigator,
    inactiveTintColor: 'white',
  }}>
    <TabBottom.Screen name="Home" component={Home} />
    <TabBottom.Screen name="Apadrinhar" children={()=><Apadrinhar nome={'Poliano'}/>} />
    <TabBottom.Screen name="Reportar" component={Reportar} />
  </TabBottom.Navigator>
);


export default TabNavigator;