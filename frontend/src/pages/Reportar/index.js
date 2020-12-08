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
    ImageBackground,
    Linking,
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
    FAB,
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
import { azure } from '../../constants/api_url.json'
import { api_token } from '../../constants/token.json'
import { AuthContext } from '../../services/auth';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function Reportar({ navigation }) {


    const [region, setRegion] = useState({});
    const [loading, setLoading] = useState(true);
    const [reports, setReports] = useState([]);
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({});
    const [selectedReport, setSelectedReport] = useState({});

    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const sheetRef = useRef(null);

    const getWhatsapp = async () => {
        try {
            axios.get(`${local}/users/${selectedReport.id_user}`, {
                headers: { Authorization: `Bearer ${api_token}` }
            })
                .then((response) => {
                    setUser(response.data);
                })
                .catch((e) => {
                    alert("Ocorreu um erro !  >> " + e /*e.response.data.message*/);
                })
        }
        catch (e) {
            console.log(e);
        }

    };

    useEffect(() => {
        _getLocationAsync();
        sheetRef.current.snapTo(2)
    }, []);

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

    function sendWhatsApp() {
        var message = "Escreva aqui sua mensagem!"
        
        Linking.openURL(`whatsapp://send?phone${user.whatsapp}&text=${message}`);
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


    const onMarkerPressed = (report) => {
        setVisible(true);
        setSelectedReport(report)
        getWhatsapp();
        sheetRef.current.snapTo(0)
    };

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                height: 500,
                padding: 10,
                borderRadius: 20,
            }}
        >
            <View style={{ alignItems: 'center' }}>
                <AntDesign name="minus" size={24} color="black" />
            </View>

            <View style={{ position: 'relative', width: '100%', flexDirection: 'row', borderRadius: 20 }}>
                <ImageBackground style={styles.image} source={require('../../../assets/gato.png')}>
                </ImageBackground>


            </View>

            <Title style={{ alignSelf: 'flex-start', margin: 10 }}>
                {selectedReport.title}
            </Title>
            <Divider />
            <Caption style={{ margin: 10, width: '100%' }}> {selectedReport.desc}</Caption>

            <View style={{ height: 120, justifyContent: 'center' }}>
                <Button
                    icon="whatsapp"
                    mode="outlined"
                    onPress={() => sendWhatsApp()}
                    color="red"
                    style={styles.buttonCarousel}
                >
                    Entrar em contato
                                    </Button>
            </View>
        </View>
    );




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




                                {
                                    reports.map((report) => {
                                        //alert(JSON.stringify(report));
                                        return (
                                            <View key={"id_report_" + report.id}>
                                                <Circle
                                                    center={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                    radius={500}
                                                    fillColor="rgba(193,66,60,0.5)"
                                                    key={"id_report_" + report.id}
                                                    strokeWidth={0}
                                                ></Circle>
                                                <Marker
                                                    ref={markerRef}//ref={ref => {reports[index] = ref; } }
                                                    coordinate={{ latitude: Number(report.map_lati), longitude: Number(report.map_long) }}
                                                    image={require('../../../assets/rescue.png')}
                                                    title={report.title}
                                                    onPress={() => onMarkerPressed(report)}

                                                >
                                                    <Callout>
                                                        <Text>{report.title}</Text>
                                                    </Callout>
                                                </Marker>


                                            </View>



                                        );
                                    })
                                }



                            </MapView>

                            <View style={styles.containerFab}>
                                <FAB
                                    color={'white'}
                                    label={'reportar'}
                                    style={styles.fab}
                                    small
                                    icon="alert-circle-outline"
                                    onPress={() => navigation.navigate('Reportar um animal')}
                                />
                            </View>









                        </View>
                    )
            }
            <BottomSheet
                ref={sheetRef}
                snapPoints={[400, 350, 0, 0]}
                borderRadius={10}
                renderContent={renderContent}
                enabledInnerScrolling={false}
                enabledBottomInitialAnimation={true}
            />



        </SafeAreaView>
    );



}

const styles = StyleSheet.create({
    image: {
        justifyContent: 'flex-end',
        resizeMode: 'contain',
        width: '100%',
        height: 200,
        alignSelf: 'center',
        backgroundColor: 'grey',
        flexDirection: 'column',
        borderRadius: 20,

    },
    containerFab: {

        position: 'absolute',
        alignItems: 'center',
        right: 15,
        top: 30
    },
    fab: {
        backgroundColor: 'red',

    },
    iconButton: {
        marginLeft: 10,
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
        bottom: 0,
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

