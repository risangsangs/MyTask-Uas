import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import InputField from '../../components/textInput';
import BtnPrimary from '../../components/btnPrimary';

import styles from './styles'

const EditStudentScreen = ({ navigation }) => {
    const handleGetDetail = () => [
        navigation.navigate('GetDetailStudent')
    ]

    return (
        <View style={styles.container}>

            {/* header */}
            <TouchableOpacity style={styles.headerContainer}>
                <Feather name='arrow-left' size={24} color="black" />
                <Text style={styles.headerText}>Edit Student</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Image */}
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../assets/images/cardImage2.jpg')} />
                </View>

                {/* TextInput */}
                <View style={styles.textInputContainer}>
                    <InputField title="Name" placeholder="Risang Agnijati" />
                    <InputField title="Kelas" placeholder="XII RPL 5" />
                    <InputField title="No Absen" placeholder="04" />
                    <InputField title="NIS" placeholder="541211153" />
                    <InputField title="TTL" placeholder="Cilacap, 15 Juni 2006" />
                    <InputField title="Agama" placeholder="Islam" />
                    <InputField title="Alamat" placeholder="Jalan Karasanan" />
                    <InputField title="Email" placeholder="risang@gmail.com" />
                </View>

                <View style={styles.btnSubmit}>
                    <BtnPrimary text='Submit' handle={handleGetDetail}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default EditStudentScreen