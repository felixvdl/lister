import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ""
    }
    // console.warn(JSON.stringify(this.state,null, 2))
  }
  handleChange(text) {
    this.setState({newTodo: text})
  }
  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo: ""})
  }
  render() {
    return(
      <View style = {styles.container}>
        <View style= {styles.box}>

        </View>
        <TextInput
          style = {styles.input}
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
          placeholder="Type to do list"
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text>Create</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo,i) => (
            <Text key={i}>{todo}</Text>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 20,
    top: -40,
    left : 130
  },
  box: {
    backgroundColor: 'steelblue',
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 30
  }
})
