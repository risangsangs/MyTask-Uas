import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import InputField from '../../components/textInput';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const handleAddStudent = () => {
    navigation.navigate('AddStudentScreen');
  }

  const handleListScreen = () => {
    navigation.navigate('ListStudentScreen')
  }
  
  let items = [
    {
      "id": 1,
      "title": "Add Student",
      "IconName": "plus",
      "handle" : handleAddStudent
    },
    {
      "id": 2,
      "title": "Students",
      "IconName": "users",
      "handle" : handleListScreen
    },
  ]

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/logo.png')} />
        <Text style={styles.headerText}>Rademy</Text>
      </View>

      {/* Image */}
      <View style={styles.imageContainer}>
        <Text style={styles.welcomeText}>Welcome Home 👋</Text>
        <Image style={styles.image} source={require('../../assets/images/cardImage.jpg')} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {items.map((item) => {
          return (
            <TouchableOpacity style={styles.itemsCard} key={item.id} onPress={item.handle}>
              <View style={styles.iconContainer}>
                <Feather name={item.IconName} size={24} color='black' />
              </View>
              <Text style={styles.itemsTitle}>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

    </View>
  )
}

export default HomeScreen;