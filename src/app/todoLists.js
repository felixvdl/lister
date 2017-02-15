import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'
import { TodoListItem } from './todoListsItem'

// create new component for seperate list items, and implement a delete funcions

const width = Dimensions.get('window').width

export class TodoLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoLists: [],
      newTodoList: "",
      accessToken: this.props.accessToken
    }
  }
  handleChange(text) {
    this.setState({newTodoList: text})
  }
  async handlePress() {
    // const todoLists = [...this.state.todoLists, this.state.newTodoList]
    // this.setState({todoLists, newTodoList: ""})
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/lists', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': this.state.accessToken
                              },
                              body: JSON.stringify({
                                list:{
                                  name: this.state.newTodoList,
                                }
                              })
                            })
      let res = await JSON.parse(response._bodyText)
      const todoLists = [...this.state.todoLists, res]
      this.setState({todoLists, newTodoList: ""})
    } catch(error) {
        console.log("error: " + error)
    }
  }

  async handleDelete(idx) {
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/lists/1', {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.accessToken
        },
        body: JSON.stringify({
          list: {
            id: idx
          }
        })
      })
    }
    catch(error) {
        console.log("error: " + error)
    }
    const todoLists = [...this.state.todoLists.slice(0,idx), ... this.state.todoLists.slice(idx + 1)]
    this.setState({todoLists})
  }
  redirectNext(routeName, id) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        accessToken: this.state.accessToken,
        id: id
      }
    });
  }
  componentDidMount() {
    this.fetchLists()
  }

  async fetchLists() {
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/lists', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': this.state.accessToken
        }
      })
    let res = await JSON.parse(response._bodyText)
    this.setState({todoLists: res})
    } catch(error) {
        console.log("error: " + error)
    }
  }

  //change hey to nextpage or put it inside the lists
  render() {
    return(
      <View>
        <View style = {styles.header}>
          <View style={styles.title}>
            <TouchableOpacity onPress={this.props.onForward}>
              <Text style={styles.titleText}>
                Lister
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style= {styles.input}
            value={this.state.newTodoList}
            onChangeText={this.handleChange.bind(this)}
            placeholder="Add a list"
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={this.handlePress.bind(this)}>
              <Text style={styles.buttonTextAdd}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todoListItems}>
          <ScrollView>
            {this.state.todoLists.map((todoList, i) => (
              <View>
                <TodoListItem todoList={todoList.name} idx={i} key={i} redirectNext={this.redirectNext.bind(this)} handleDelete={this.handleDelete.bind(this)}/>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  title: {
    top: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: width * 0.8,
    left: width * 0.1
  },
  titleText: {
    fontWeight: 'bold',
    color: '#2b4163',
    fontSize: 20
  },
  input: {
    width: width* 0.3,
    left: width* 0.4,
    top: 50,
    height: 20,
  },
  buttonAdd: {
    width: 25,
    top: 30,
    left: width * 0.8,
    borderWidth: 2,
    borderColor: '#9df279',
    height: 25,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonTextAdd: {
    color: '#9df279',
    fontSize: 14,
    fontWeight: 'bold',
    top: 0.3,
    backgroundColor: 'transparent'
  },

  todoListItems: {
    top: 38,
    left: width * 0.3,
    width: width * 0.4,
  },


})
