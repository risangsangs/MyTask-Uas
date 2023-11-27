import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import InputField from '../../components/textInput';
import BtnPrimary from '../../components/btnPrimary';

import styles from './styles'

const AddStudentScreen = ({ navigation }) => {
    const handleAddStudent = () => [
        navigation.navigate('HomeScreen')
    ]

    return (
        <View style={styles.container}>

            {/* header */}
            <TouchableOpacity style={styles.headerContainer}>
                <Feather name='arrow-left' size={24} color="black" />
                <Text style={styles.headerText}>Add Student</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Image */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/cardImage2.jpg')} />
                </View>

                {/* TextInput */}
                <View style={styles.textInputContainer}>
                    <InputField title="Name" placeholder="Enter your name" />
                    <InputField title="Kelas" placeholder="Enter your kelas" />
                    <InputField title="No Absen" placeholder="Enter your no absen" />
                    <InputField title="NIS" placeholder="Enter your NIS" />
                    <InputField title="TTL" placeholder="Enter your TTL" />
                    <InputField title="Agama" placeholder="Enter your Agama" />
                    <InputField title="Alamat" placeholder="Enter your Alamat" />
                    <InputField title="Email" placeholder="Enter your Email" />
                </View>

                <View style={styles.btnSubmit}>
                    <BtnPrimary text='Add Student' handle={handleAddStudent}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default AddStudentScreen