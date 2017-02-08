import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native'

// create new component for seperate list items, and implement a delete funcions

const width = Dimensions.get('window').width

export class TodoLists extends Component {
  constructor() {
    super()
    this.state = {
      todoLists: [],
      newTodoList: ""
    }
  }
  handleChange(text) {
    this.setState({newTodoList: text})
  }
  handlePress() {
    const todoLists = [...this.state.todoLists, this.state.newTodoList]
    this.setState({todoLists, newTodoList: ""})
  }
  handleDelete() {}
  render() {
    return(
      <View>
        <View style = {styles.header}>
          <View style={styles.title}>
            <Text style={styles.titleText}>
              Lister
            </Text>
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
              <View style={styles.todoListBox} idx={i} key={i}>
                  <Text style={styles.todoListItemsText}>{todoList}</Text>
                  <TouchableOpacity onPress={ () => this.props.handleDelete.call(this, this.props.idx)}>
                    <Text style={styles.todoListItemsDelete}>delete</Text>
                  </TouchableOpacity>
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
    top: 0.3
  },
  todoListBox: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    borderTopColor: 'lightgrey',
    padding: 10,
    width: width * 0.4,
    alignItems: 'center'

  },
  todoListItems: {
    top: 38,
    left: width * 0.3,
    width: width * 0.4,
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
