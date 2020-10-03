import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function BackArrow({ navigation }) {
    return (
        <TouchableOpacity onPress={() => { navigation.pop(); }} style={{margin:5}}>
            <Ionicons name="ios-arrow-back" size={30} color="grey" />
        </TouchableOpacity>
    )
}
