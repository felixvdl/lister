import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';
import { Todo } from './todo';
import { TodoLists } from './todoLists';

export class MainPage extends Component {
  renderScene(route, navigator) {
    if(route.index === 0) {
      return(
        <TodoLists
          navigator={navigator}
          title={route.title}
          onForward={() => {
            if(route.index > 0) {

            } else {
              navigator.push(routes[1])
            }
          }}
        />
    )}
    if(route.index === 1) {
      return(
        <Todo
          navigator={navigator}
          title={route.title}
          onBack={() => {
            if (route.index > 0) {
              navigator.pop();
            }
          }}
        />
)}
  }
  render() {
    routes = [
      {title: 'Main page', index: 0},
      {title: 'Todo List', index: 1}
    ];
    return(
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
      />
    )
  }
}
