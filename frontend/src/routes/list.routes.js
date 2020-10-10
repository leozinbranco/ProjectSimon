import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import List from '../pages/List';
import PetProfile from '../pages/PetProfile'
import Patronize from '../pages/Patronize'
import UserBankData from '../pages/UserBankData'
import UserBankDataRegister from '../pages/UserBankDataRegister'
import OngProfile from '../pages/OngProfile'

const Stack = createStackNavigator();

export default function ListRoutes({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={List} options={{ headerShown: false }}/>
            <Stack.Screen name="PetProfile" component={PetProfile} />
            <Stack.Screen name="OngProfile" component={OngProfile} />
            <Stack.Screen name="Patronize" component={Patronize} options={{ headerShown: false }}/>
            <Stack.Screen name="UserBankData" component={UserBankData} options={{ headerShown: false}}/>
            <Stack.Screen name="UserBankDataRegister" component={UserBankDataRegister} options={{ headerShown: false}}/>
        </Stack.Navigator>
    );
}

