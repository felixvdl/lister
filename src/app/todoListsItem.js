import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export class ListItem extends Component {
  constructor() {
    super()
  }
  render() {
    return(
      <View style={styles.todoListBox}>
          <Text style={styles.todoListItemsText}>{this.props.todoList}</Text>
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
