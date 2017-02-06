import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles'
import { TodoForm } from './todoform'
import { connect } from 'react-redux'


export class _Todo extends Component {
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
    this.props.createTodo(this.state.newTodo)
    this.setState({newTodo: ""})
  }
  render() {
    return(
      <View style = {styles.container}>
        <View style= {styles.box}>

        </View>
        <TodoForm
          handlePress={this.handlePress.bind(this)}
          handleChange={this.handleChange.bind(this)}
          value={this.state.newTodo}
        />
        <View>
          {this.state.todos.map((todo,i) => (
            <Text style={styles.text} key={i}>{todo.name}</Text>
          ))}
        </View>
      </View>
    )
  }
}

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({type: 'CREATE_TODO',payload: todo})
  }
})

const mapStateToProps = (state) => ({
  todos: state.todos
})

export const Todo = connect(mapStateToProps, mapActionsToProps)(_Todo)
