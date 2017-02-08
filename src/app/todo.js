import React, {Component, PropTypes} from 'react';
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
      newTodo: ""
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
  handleDelete(idx) {
      const todos = [...this.state.todos.slice(0,idx), ...this.state.todos.slice(idx + 1)];
      this.setState({todos})
  }
  handleClear() {
    this.setState({todos: []})
  }
  render() {
    return(
      <View style={styles.container}>
        <View style= {styles.header}>
          <TouchableOpacity style= {styles.box} onPress={this.props.onBack}>
          </TouchableOpacity>
          <TextInput
            style = {styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
            placeholder="Add a chore"
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonTextAdd}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonClear} onPress={this.handleClear.bind(this)}>
              <Text style={styles.buttonTextClear}>clear</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.listItems}>
          <ScrollView>
              {this.state.todos.map((todo,i) => (
                <ListItem todo={todo} idx={i} key={i} handleDelete={this.handleDelete.bind(this)}/>
              ))}
          </ScrollView>
        </View>
    </View>
    )
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
