import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import {AuthContext} from '../services';  Este sera o contexto de login..
//import Drawer from './drawer.routes';

import Login from './login.routes';
import Tabs from './tabs.routes';

const Stack = createStackNavigator();

const Routes = () => {

  const estaLogado  = false 

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {estaLogado ?
          (<Stack.Screen name="App" component={Tabs} />)
          :
          (<Stack.Screen name="Login" component={Login}/>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );


};


export default Routes;
