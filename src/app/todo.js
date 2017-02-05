import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles'



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
            <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        <View>
          {this.state.todos.map((todo,i) => (
            <Text style={styles.text} key={i}>{todo}</Text>
          ))}
        </View>
      </View>
    )
  }
}
