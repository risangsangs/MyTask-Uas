import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import InputField from '../../components/textInput';
import BtnPrimary from '../../components/btnPrimary';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>

      {/* Image Background */}
      <View>
        <Image style={styles.bgLogin} source={require('../../assets/images/bgLogin.png')} />
      </View>

      {/* Card */}
      <View style={styles.cardContainer}>
        {/* Card Title */}
        <View style={styles.cardTitle}>
          <Text style={styles.cardTitleText}>Welcome Back!</Text>
          <Text style={styles.cardDescText}>Long time no see! Let’s login to get started</Text>
        </View>

        {/* Input Form */}
        <View style={styles.inputField}>
          <InputField title="Email Address" placeholder="Youremail@gmail.com" />
          <InputField title="Password" placeholder="Enter Your Password" />
        </View>

        {/* Input Form */}
        <View>
          <BtnPrimary text='Sign In' handle={handleHomeScreen}/>
          <TouchableOpacity style={styles.forgetContainer}>
            <Text style={styles.forgotPassword}>Forget password?</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default LoginScreen;