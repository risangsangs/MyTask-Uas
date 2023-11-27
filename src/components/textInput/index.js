import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const InputField = (props) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>{props.title}</Text>

        <TextInput placeholder={props.placeholder} style={styles.textInput}/>
    </View>
  )
}

export default InputField