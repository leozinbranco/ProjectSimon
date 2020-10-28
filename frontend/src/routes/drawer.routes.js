import React from 'react';


import { createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import {View, Text} from 'react-native'

import Home from '../pages/Home';
import PatronizeList from '../pages/PatronizeList';


const NavDrawer = createDrawerNavigator();

const HomeDrawer = () => {
    return (
        <NavDrawer.Navigator
            initialRouteName="Home"
            drawerType="slide"
        >
            <NavDrawer.Screen name="Home" component={Home} />
            <NavDrawer.Screen name="Seus apadrinhamentos" component={PatronizeList} />
        </NavDrawer.Navigator>
    )

}

export default HomeDrawer