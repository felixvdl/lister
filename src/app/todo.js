import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { styles } from './styles'
import { ListItem } from './listItem'



export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: "",
      done: false
    }
    // console.warn(JSON.stringify(this.state,null, 2))
  }
  handleChange(text) {
    this.setState({newTodo: text})
  }
  handlePress() {
    fetch('http://localhost:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        name: this.state.newTodo
      }),
      headers: {
        'content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      const todos = [...this.state.todos, data]
      this.setState({todos, newTodo: ""})
    })
  }
  handleComplete() {
    this.setState({
      done: !(this.state.done)
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <View style= {styles.header}>
          <View style= {styles.box}>
          </View>
          <TextInput
            style = {styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
            placeholder="Add a chore"
          />
          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.listItems}>
          <ScrollView>
              {this.state.todos.map((todo,i) => (
                <ListItem todo={todo} key={i}/>
              ))}
          </ScrollView>
        </View>
    </View>
    )
  }
}
