import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import PetProfile from '../pages/PetProfile'

const Stack = createStackNavigator();

export default function ListRoutes({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="PetProfile" component={PetProfile}/>

        </Stack.Navigator>
    );
}

