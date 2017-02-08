import React, { Component , PropTypes} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { TodoLists} from './todoLists'
const width = Dimensions.get('window').width

export class ListItem extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <View style={styles.todoListBox}>
          <TouchableOpacity>
            <Text style={styles.todoListItemsText}>{this.props.todoList}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.handleDelete.call(this, this.props.idx)}>
            <Text style={styles.todoListItemsDelete}>delete</Text>
          </TouchableOpacity>
      </View>
    )
  }
}



export const styles = StyleSheet.create({
  todoListBox: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    borderTopColor: 'lightgrey',
    padding: 10,
    width: width * 0.4,
    alignItems: 'center'
  },
  todoListItemsText: {
    color: '#2b4163',
    fontWeight: 'bold',
  },
    todoListItemsDelete: {
      color: '#e53b3b',
      backgroundColor: 'transparent',
      top: 4,
      fontSize: 10
    },
})
