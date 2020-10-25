import React, { useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native';
import Style from './style'
import MapView from 'react-native-maps';
//import * as Permissions from 'expo-permissions';

export default function Reportar() {
   
    const [mapRegion, setMapRegion] = useState({});
    const [latitude, setLatitude] = useState({});
    const [longitude, setLongitude] = useState({});
    const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
    const [locationResult, setLocationResult] = useState({});

    useEffect(() => {
        _getLocationAsync();

        alert(JSON.stringify(llatitude));
        alert(JSON.stringify(longitude));
    });

    _handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        setMapRegion({ mapRegion });
    };

    _getLocationAsync = async () => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setLocationResult({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            setHasLocationPermissions(true);
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        alert("location" + location );
        setLocationResult({ locationResult: JSON.stringify(location) });

        // Center the map on the location we just fetched.
        alert("Latitude " + locationResult.coords.latitude);
        setLatitude(locationResult.coords.latitude);
        setLongitude(locationResult.coords.longitude);

        //setMapRegion({latitude: locationResult.coords.latitude, longitude: locationResult.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421});
        
    };
   
    return (
        <SafeAreaView>
            <Text>
                Report page
            </Text>

            <View style={Style.container}>
                <MapView style={styles.mapStyle} initialRegion={{latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421}} />
            </View>




        </SafeAreaView>
    );



}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

