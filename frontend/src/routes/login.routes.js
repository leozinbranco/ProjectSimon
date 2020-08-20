import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../pages/Login';
import RegisterScreen from '../pages/Register';
import UserRegistrationScreen from '../pages/UserRegistration'


const Stack = createStackNavigator();

const Login = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="UserRegistration" component={UserRegistrationScreen} />
  </Stack.Navigator>
);

export default Login;