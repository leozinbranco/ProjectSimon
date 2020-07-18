import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Filter from '../pages/Filter';
import List from '../pages/List';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator(); //drawer (puxa p lado)

const FilterRoute = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={
                () => {() => (
                    <List navigation= {this.props.navigation}/>
                        
                    )}
                    
            } />
            <Stack.Screen name="Filter" component={
                () => {() => (
                    <Filter navigation= {this.props.navigation}/>
                        
                    )}
            } />
        </Stack.Navigator>
    </NavigationContainer>
);

export default FilterRoute;