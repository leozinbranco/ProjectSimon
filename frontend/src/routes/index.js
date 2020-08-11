import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import {AuthContext} from '../services';  Este sera o contexto de login..
//import Drawer from './drawer.routes';

import {AuthContext} from '../services/auth';

import Login from './login.routes';
import Tabs from './tabs.routes';

const Stack = createStackNavigator();

const Routes = () => {
  const {isLogged} = React.useContext(AuthContext); //fazer esta logado   //estaLogado ? rotasTabsRoute : rotasLogin 
  //     x     ?      seSim     :   seNão    

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogged ?
          (<Stack.Screen name="App" component={Tabs} />)
          :
          (<Stack.Screen name="Login" component={Login}/>)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );


};


export default Routes;
