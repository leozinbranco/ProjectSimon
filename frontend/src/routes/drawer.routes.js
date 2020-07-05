import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Home from './home.routes';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={Home} />
  </Drawer.Navigator>
);

export default DrawerNavigation;