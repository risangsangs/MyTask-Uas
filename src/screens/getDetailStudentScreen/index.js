import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import BtnPrimary from '../../components/btnPrimary';

import styles from './styles';

const GetDetailStudent = ({ navigation }) => {
  const handleEdit = () => {
    navigation.navigate('EditStudentScreen')
  }

  const data = {
    "nama": "Risang Agnijati",
    "Kelas": "XII RPL 5",
    "Absen": "04",
    "NIS": "541211153",
    "TTL": "Cilacap, 10 Juni 2006",
    "Agama": "Islam",
    "Alamat": "Margasana Jatilawang Banyumas",
    "Email": "risang@gmail.com"
  }

  return (
    <View style={styles.container}>

      {/* header */}
      <TouchableOpacity style={styles.headerContainer}>
        <Feather name='arrow-left' size={24} color="black" />
        <Text style={styles.headerText}>Detail Student</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.imageContainer}>
          <Text style={styles.welcomeText}>Welcome To My Profile 👋</Text>
          <Image style={styles.image} source={require('../../assets/images/cardImage1.jpg')} />
        </View>

        {/* content */}
        <View style={styles.contentContainer}>
          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>name</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>Risang Agnijati</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>Kelas</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>XII RPL 5</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>Absen</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>04</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>NIS</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>541211153</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>TTL</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>Cilacap, 10 Juni 2006</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>Agama</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>Islam</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>Alamat</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>Margasana Jatilawang Banyumas</Text>
            </View>
          </View>

          <View style={styles.contentSub}>
            <Text style={styles.textTitle}>Email</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>risang@gmail.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.btnEdit}>
        <BtnPrimary text='Edit Data' handle={handleEdit}/>
        </View>

      </ScrollView>
    </View>
  )
}

export default GetDetailStudent