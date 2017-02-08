import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'

const width = Dimensions.get('window').width

export class TodoLists extends Component {
  constructor() {
    super()
    this.state = {
      todoLists: [],
      newTodoList: ""
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Lister
          </Text>
        </View>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  title: {
    top: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: width * 0.8,
    left: width * 0.1
  },
  titleText: {
    fontWeight: 'bold',
    color: '#2b4163',
    fontSize: 20
  },
  container: {

  }
})
