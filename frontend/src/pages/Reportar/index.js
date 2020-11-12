import React, { useState, useEffect, useRef } from 'react';
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
    Image,
} from 'react-native';
import {
    Paragraph,
    Caption,
    Divider,
    Avatar,
    Button,
    Card,
    IconButton,
    Title,
    Colors,
    Switch,
} from 'react-native-paper';
import Style from './style'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle } from 'react-native-maps';
import Carousel from 'react-native-snap-carousel'
//import {Location, Permissions } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

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
    const [visible, setVisible] = useState(false);

    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const carouselRef = useRef(null);

    //const [coords, setCoords] = useState({});
    //const [hasLocationPermissions, setHasLocationPermissions] = useState(false);
    //const [locationResult, setLocationResult] = useState({});
    useEffect(() => {
        _getLocationAsync();
        //alert(JSON.stringify(latitude));
        //alert(JSON.stringify(longitude));
    }, []);

    /*useEffect(() => {
        renderCarousel();
    })*/



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
        if (status === 'granted' && gpsServiceStatus) {
            const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });


            setLoading(false);
        } else {

            alert("Ocorreu um erro ! Autorize o aplicativo para acessar a localização!");
        }

    };

    onCarouselItemChange = (index) => {

        mapRef.current.animateToRegion({
            latitude: reports[index].map_lati - 0.01,
            longitude: reports[index].map_long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })

        //reports[index].current.showCallout();
    };

    onMarkerPressed = (index) => {
        setVisible(true);

        mapRef.current.animateToRegion({
            latitude: reports[index].map_lati - 0.01,
            longitude: reports[index].map_long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });

        //carouselRef.current.snapToItem(index);
    };

    const renderCarouselItem = ({ item }) => {
        return (
            <View style={styles.cardContainer} key={`id_report_${item.id}`}>

                <View style={{ position: 'relative', width: '100%', flexDirection: 'row' }}>
                    <Title style={{ alignSelf: 'center' }}>
                        {item.title}
                    </Title>

                    <View style={{ position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => { setVisible(false) }}   >
                            <AntDesign name="close" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                </View>

                <Caption>{item.desc}</Caption>
                <Divider />
                <View style={{ margin: 10 }}>
                    <Image source={require('../../../assets/gato.png')} style={styles.imageCarousel} />
                </View>

                <Button
                    onPress={() => alert("apertou")}
                    mode="contained"
                    style={styles.buttonCarousel}

                >
                    Contatar
                </Button>



            </View>
        );
    }

    return (
        <SafeAreaView style={styles.screen}>


            {
                loading ? (<ActivityIndicator size="large" animating={loading} color={'gray'} />)
                    :
                    (
                        <View style={styles.container}>
                            <MapView style={styles.mapStyle} provider={PROVIDER_GOOGLE} region={region}
                                ref={mapRef}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                                showsUserLocation={true}
                                showsMyLocationButton={true}

                            >
                                <View style={styles.iconButton}>
                                    <IconButton
                                        icon="menu"
                                        color={Colors.grey800}
                                        
                                        size={40}
                                        onPress={() => navigation.toggleDrawer()}
                                    />
                                </View>




                                {
                                    reports.map((report, index) => {
                                        //alert(JSON.stringify(report));
                                        return (
                                            <View key={"id_report_" + report.id}>
                                                <Circle
                                                    center={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                    radius={500}
                                                    fillColor="rgba(193,66,66,0.5)"
                                                    key={"id_report_" + report.id}
                                                    strokeWidth={0}
                                                ></Circle>
                                                <Marker
                                                    ref={markerRef}//ref={ref => {reports[index] = ref; } }
                                                    coordinate={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                    image={require('../../../assets/rescue.png')}
                                                    title={report.title}
                                                    onPress={() => onMarkerPressed(index)}

                                                >
                                                    <Callout>
                                                        <Text>An Interesting city</Text>
                                                    </Callout>
                                                </Marker>


                                            </View>



                                        );
                                    })
                                }



                            </MapView>

                            {
                                visible ? (
                                    <Carousel
                                        ref={carouselRef}
                                        data={reports}
                                        renderItem={renderCarouselItem}
                                        sliderWidth={Dimensions.get('window').width}
                                        itemWidth={300}
                                        containerCustomStyle={styles.carousel}
                                        onSnapToItem={(index) => onCarouselItemChange(index)}
                                        removeClippedSubviews={false}
                                    />
                                )
                                    : null
                            }

                        </View>
                    )
            }



        </SafeAreaView>
    );



}

const styles = StyleSheet.create({
    iconButton: {
        marginLeft:10,
    },
    screen: {
        width: Dimensions.get('window').width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
    carousel: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 40,
    },
    cardContainer: {
        backgroundColor: 'white',
        height: 250,
        width: '100%',
        padding: 18,
        borderRadius: 24,
        paddingTop: 5,
    },
    cardTitle: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    },
    buttonCarousel: {
        position: 'absolute',
        bottom: 15,
        backgroundColor: 'red',
        height: 30,
        width: 250,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    imageCarousel: {
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 0,
        borderRadius: 15,
        height: 100,
        width: '50%',
    },

});

