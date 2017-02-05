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
      <View>
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
          <Text>Hey</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 20
  }
})
