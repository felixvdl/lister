import React from 'react'

import {
  View,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native'

import { styles } from './styles'



export const TodoForm = (props) => (
  <View>
    <TextInput
      style = {styles.input}
      value={props.value}
      onChangeText={props.handleChange}
      placeholder="Type to do list"
    />
    <TouchableOpacity style={styles.button} onPress={props.handlePress}>
      <Text style={styles.buttonText}>Create</Text>
    </TouchableOpacity>
  </View>
)
