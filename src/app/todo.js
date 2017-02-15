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
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: "",
      id: this.props.id + 1,
      accessToken: this.props.accessToken
    }
    // console.warn(JSON.stringify(this.state,null, 2))
  }
  componentDidMount() {
    this.fetchLists()
  }

  async fetchLists() {
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/todos/' +this.state.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.accessToken
        }
      })
    let res = await JSON.parse(response._bodyText)
    this.setState({todos: res})
    } catch(error) {
        console.log("error: " + error)
    }
  }
  handleChange(text) {
    this.setState({newTodo: text})
  }
  async handlePress() {
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/todos', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.state.accessToken
                              },
                              body: JSON.stringify({
                                todo:{
                                  name: this.state.newTodo,
                                  id: this.state.id
                                }
                              })
                            })
      let res = await JSON.parse(response._bodyText)
      const todos = [...this.state.todos, res]
      this.setState({todos, newTodo: ""})
          console.log("thisis the prop")
      console.log(this.state.todos)
    } catch(error) {
        console.log("error: " + error)
    }
  }
  async handleDelete(idx) {
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/todos/1', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.accessToken
        },
        body: JSON.stringify({
          todo: {
            list_id: this.state.id,
            id: idx

          }
        })
      })
    }
    catch(error) {
        console.log("error: " + error)
    }
    const todos = [...this.state.todos.slice(0,idx), ...this.state.todos.slice(idx + 1)];
    this.setState({todos})
  }
  handleClear() {
    this.setState({todos: []})
  }
  redirectBack(routeName) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        accessToken: this.state.accessToken
      }
    });
  }
  render() {
    return(
      <View style={styles.container}>
        <View style= {styles.header}>
          <TouchableOpacity style= {styles.box} onPress={this.redirectBack.bind(this, 'todolists')}>
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
                <ListItem todo={todo.name} idx={todo.id} idy={i} key={i} handleDelete={this.handleDelete.bind(this)}/>
              ))}
          </ScrollView>
        </View>
    </View>
    )
  }
}
