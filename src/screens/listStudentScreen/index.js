import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const ListStudentScreen = ({ navigation }) => {
    const handleGetStudent = () => {
        navigation.navigate('GetDetailStudent')
    }

    const dataSiswa = [
        {
            "id": 1,
            "name": "Fachry Erlangga Crspo",
            "class": "XII RPL 5",
            "nis": "54121149",
            "handle" : handleGetStudent
        },
        {
            "id": 2,
            "name": "Reza Syahrul",
            "class": "XII RPL 5",
            "nis": "54121150",
            "handle" : handleGetStudent
        },
        {
            "id": 3,
            "name": "Risang Agnijati",
            "class": "XII RPL 5",
            "nis": "54121151",
            "handle" : handleGetStudent
        },
        {
            "id": 4,
            "name": "Rivaldo",
            "class": "XII RPL 5",
            "nis": "54121152",
            "handle" : handleGetStudent
        },
        {
            "id": 5,
            "name": "Rizal Nurdianto",
            "class": "XII RPL 5",
            "nis": "54121153",
            "handle" : handleGetStudent
        },
        {
            "id": 6,
            "name": "Ryan Dipdha Fortunate",
            "class": "XII RPL 5",
            "nis": "54121154",
            "handle" : handleGetStudent
        },
        {
            "id": 7,
            "name": "Syafa Farel",
            "class": "XII RPL 5",
            "nis": "54121155",
            "handle" : handleGetStudent
        },
    ]

    const dropDown = [
        { label: 'XII RPL 1', value: '1' },
        { label: 'XII RPL 2', value: '2' },
        { label: 'XII RPL 3', value: '3' },
        { label: 'XII RPL 4', value: '4' },
        { label: 'XII RPL 5', value: '5' },
        { label: 'XII TKJ 1', value: '6' },
        { label: 'XII TKJ 2', value: '7' },
        { label: 'XII TKJ 3', value: '8' },
        { label: 'XII TKJ 4', value: '9' },
        { label: 'XII TJA 1', value: '10' },
        { label: 'XII TJA 2', value: '11' },
    ];

    

    const [value, setValue] = useState(null);
    const handleDropdownChange = item => {
        setValue(item.value);

        if (item.value === '5') {
            console.warn(item.value)
        }
    };

    return (
        <View style={styles.container}>

            {/* header */}
            <TouchableOpacity style={styles.headerContainer}>
                <Feather name='arrow-left' size={24} color="black" />
                <Text style={styles.headerText}>Students</Text>
            </TouchableOpacity>

            {/* Image */}
            <View style={styles.imageContainer}>
                <Text style={styles.welcomeText}>Welcome Home 👋</Text>
                <Image style={styles.image} source={require('../../assets/images/cardImage1.jpg')} />
            </View>

            {/* Dropdown */}
            <View style={styles.dropdownContainer}>
                <Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    data={dropDown}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder="Select item"
                    searchPlaceholder="Search..."
                    value={value}
                    onChange={handleDropdownChange}
                />
            </View>

            {/* list Siswa */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {dataSiswa.map((item) => {
                    return (
                        <TouchableOpacity style={styles.listContainer} key={item.id} onPress={handleGetStudent}>
                            <View style={styles.listText}>
                                <Text style={styles.listName}>{item.name}</Text>
                                <Text style={styles.listKeterangan}>{item.class} || {item.nis}</Text>
                            </View>
                            <TouchableOpacity style={styles.listBtnContainerDel}>
                                <Feather name='trash' size={26} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.listBtnContainer} onPress={handleGetStudent}>
                                <Feather name='chevron-right' size={26} color='white' />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default ListStudentScreen