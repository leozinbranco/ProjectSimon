import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import Style from './style'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
//import {Location, Permissions } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from 'axios';

import { local } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'
import { AuthContext } from '../../services/auth';

export default function Reportar({ navigation }) {

    //const [mapRegion, setMapRegion] = useState({});
    //const [latitude, setLatitude] = useState({});
    //const [longitude, setLongitude] = useState({});
    const [region, setRegion] = useState({});
    const [loading, setLoading] = useState(true);
    const [reports, setReports] = useState([]);

    const arrayPolygon = [
        { name: '1', latitude: 37.382935, longitude: -122.412355 },
        { name: '2', latitude: 37.782935, longitude: -122.422355 },
        { name: '3', latitude: 37.772935, longitude: -122.412355 },
        { name: '4', latitude: 37.792935, longitude: -122.457655 },
        { name: '5', latitude: 37.742935, longitude: -122.459655 },
    ]
    //const [coords, setCoords] = useState({});
    //const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
    //const [locationResult, setLocationResult] = useState({});
    useEffect(() => {
        _getLocationAsync();

        //alert(JSON.stringify(latitude));
        //alert(JSON.stringify(longitude));
    }, []);



    /*_handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        setMapRegion({ mapRegion });
    };*/

    const _getReportsLocation = async () => {
        try {
            await axios.get(`${local}/reports`,
                {
                    headers: { Authorization: `Bearer ${api_token}` }
                }).then((response) => {

                    //alert(JSON.stringify(response.data));
                    setReports(response.data);

                }).catch((error) => {
                    alert("Ocorreu um erro: " + error);
                })
        }
        catch {

        }
    }


    const _getLocationAsync = async () => {
        _getReportsLocation();
        let gpsServiceStatus = await Location.hasServicesEnabledAsync();


        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        //alert(status);

        if (status === 'granted' && gpsServiceStatus) {
            const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            //alert(JSON.stringify(location.coords));
            //setLatitude(location.coords.latitude);
            ///setLongitude(location.coords.longitude);
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
            setLoading(false);
            /*setCoords({ 
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude
            })*/
            //alert(JSON.stringify(region));
            //alert(latitude);
            //alert(longitude);
            //alert(coords);
            /*setLocationResult({
                locationResult: 'Permission to access location was denied',
            });*/
        } else {
            //setHasLocationPermissions(true);
            alert("Ocorreu um erro ! Autorize o aplicativo para acessar a localização!");
        }
        //setMapRegion({latitude: locationResult.coords.latitude, longitude: locationResult.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421});

    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>

                {
                    loading ? (<ActivityIndicator size="large" animating={loading} color={'gray'} />)
                        :
                        (<MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} region={region}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            showsUserLocation={true}
                            showsMyLocationButton={true}

                        >




                            {
                                reports.map(report => {
                                    //alert(JSON.stringify(report));
                                    return (
                                        <>
                                            <Circle
                                                center={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                radius={500}
                                                fillColor="rgba(193,66,66,0.5)"
                                                key={"id_report_" + report.id}
                                                strokeWidth={0}
                                            ></Circle>
                                            <Marker
                                                coordinate={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                image={require('../../../assets/rescue.png')}
                                                title={report.title}
                                            >
                                            
                                            </Marker>


                                        </>



                                    );
                                })
                            }



                        </MapView>)
                }
            </View>
        </SafeAreaView>
    );



}

const styles = StyleSheet.create({
    screen: {
        width: Dimensions.get('window').width,
        height: '100%',
    },

    mapStyle: {
        height: '100%',
        width: '100%',
        ...StyleSheet.absoluteFillObject
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
});

