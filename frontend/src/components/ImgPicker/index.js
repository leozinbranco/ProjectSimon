import React, {useEffect}from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { AntDesign } from '@expo/vector-icons';


export default function ImgPicker() {

    const [selectedImage, setSelectedImage] = React.useState(null);


    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                return alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        try {
            
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    //alert('console> ' + selectedImage);
    if (selectedImage !== null) {
        //console.log("console: " + selectedImage);
        //alert('console> ' + selectedImage);
        return (
            <TouchableOpacity style={styles.photo} onPress={_pickImage}>
                <Image
                    source={{uri: selectedImage}}
                    style={styles.thumbnail}
                />
            </TouchableOpacity>
        );
    } else {

        return (
            <TouchableOpacity style={styles.anyPhoto} onPress={_pickImage}>
                <AntDesign name="camera" size={24} color="#393939" />
            </TouchableOpacity>
        );

    }



}

const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    anyPhoto: {
        width: 110,
        height: 110,
        backgroundColor: 'grey',
        opacity: 0.5,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },

    photo: {
        width: 110,
        height: 110,
        borderRadius: 100,
        resizeMode: 'contain',
        /*justifyContent: 'center',
        alignItems:'center',*/
    },
});