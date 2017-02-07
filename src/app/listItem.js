import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './styles'

export class ListItem extends React.Component {
  constructor() {
    super()
    this.state = {
      done: false
    }
  }
  handleComplete() {
    this.setState({
      done: !(this.state.done)
    })
  }
  render() {
    return(
      <View style= {styles.itemBox}>
        <Text>
          <Text style={this.state.done ? styles.done : styles.notDone}>{this.props.todo.name}</Text>
          <TouchableOpacity onPress={this.handleComplete.bind(this)} style={styles.itemComplete}>
            <Text style={styles.optionText}>{this.state.done ? "undo" : "done"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemDelete}>
            <Text style={styles.optionText}>delete</Text>
          </TouchableOpacity>
        </Text>
      </View>
    )
  }
}
