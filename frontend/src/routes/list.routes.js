import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import PetProfile from '../pages/PetProfile'
import Patronize from '../pages/Patronize'

const Stack = createStackNavigator();

export default function ListRoutes({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={List} options={{ headerShown: false }}/>
            <Stack.Screen name="PetProfile" component={PetProfile} />
            <Stack.Screen name="Patronize" component={Patronize} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

