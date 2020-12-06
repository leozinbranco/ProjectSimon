import React from 'react';


import { createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';
import {View, Text} from 'react-native'

import Home from '../pages/Home';
import PatronizeList from '../pages/PatronizeList';
import PetRegister from '../pages/PetRegister';
import ReportPage from '../pages/ReportPage';
import Logout from '../components/Logout';

import { AuthContext } from '../services/auth';

const NavDrawer = createDrawerNavigator();

const HomeDrawer = () => {

    const { userData } = React.useContext(AuthContext);
    
    return (
        <NavDrawer.Navigator
            initialRouteName="Home"
            drawerType="slide"
        >
            <NavDrawer.Screen name="Home" component={Home} />
            <NavDrawer.Screen name="Seus apadrinhamentos" component={PatronizeList} />
            {
                userData.isOng ? 
                <NavDrawer.Screen name="Registrar novo animal" component={PetRegister} /> : null

            }
            <NavDrawer.Screen name="Reportar um animal" component={ReportPage} />
            <NavDrawer.Screen name="Sair" component={Logout} />

        </NavDrawer.Navigator>
    )

}

export default HomeDrawer