import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import { IconButton, Divider, Text } from 'react-native-paper';
import Modal from 'react-native-modal';

import Style from './style'

export default function SelectCompany({ visible, closeModal, data, selectedTypeHandler }) {


    const renderItem = ({ item }) =>
        <View>
            <Divider />
            <TouchableOpacity key={item.key} style={{ marginVertical: 10 }} onPress={() => selectedTypeHandler(item)}>
                <Text style={Style.itemOption}>{item.type_name}</Text>
            </TouchableOpacity>
            <Divider />

        </View>


    return (
        <Modal
            isVisible={visible}
            style={{ backgroundColor: "white", 
            margin: 0, 
            padding: 10, 
            marginTop: '35%', 
            borderTopStartRadius: 50, 
            borderTopEndRadius: 50, 
            width: '100%' }}
            onDismiss={closeModal}
        >
            <IconButton icon="close" size={20} onPress={closeModal} color="darkgrey" />


            <FlatList
                style={{ paddingVertical: 15 }}
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />

        </Modal >

    )
}