import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import UserRegistrationScreen from '../pages/UserRegistration'
import OngRegistrationScreen from '../pages/OngRegistration'


const Stack = createStackNavigator();

const Login = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="UserRegistration" component={UserRegistrationScreen} />
    <Stack.Screen name="OngRegistration" component={OngRegistrationScreen} />
  </Stack.Navigator>
);

export default Login;