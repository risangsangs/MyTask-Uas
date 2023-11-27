import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './styles'

const BtnPrimary = (props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={props.handle}>
      <Text style={styles.textBtn}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default BtnPrimary