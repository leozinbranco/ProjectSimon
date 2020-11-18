import React from 'react';
import {View, Text} from 'react-native'

import { AuthContext } from '../../services/auth';

export default function Logout() {
    const { toggleLogged } = React.useContext(AuthContext);

    React.useEffect(() => {
        toggleLogged()
    }, [])

    return (
        <View style={{backgroundColor: '#3FB55D', height: '100%'}}>
            <Text>  </Text>
        </View>
    )

}