import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function BackArrow({ navigation, style, size }) {
    return (
        <TouchableOpacity onPress={() => { navigation.pop(); }} style={style}>
            <Ionicons name="ios-arrow-back" size={size} color="grey" />
        </TouchableOpacity>
    )
}
