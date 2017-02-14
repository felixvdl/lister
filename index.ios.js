/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// npm --isave json-server
// json-server db.json
 import React, { Component } from 'react';
 import { AppRegistry, StyleSheet, Navigator, Text, View } from 'react-native';
 import { Todo } from './src/app/todo';
 import { Reddit } from './src/app/Reddit'
 import { TodoLists } from './src/app/todoLists'
 import { MainPage } from './src/app/MainPage'
 import { Register } from './src/app/register'
 import { Home } from './src/app/home'
 import { Root } from './src/app/root'
 import { Login } from './src/app/login'


 class Main extends Component {

   renderScene(route, navigator) {
     console.log(route);
     if(route.name == 'root') {
       return <Root navigator={navigator} />
     }
     if(route.name == 'home') {
       return <Home navigator={navigator} />
     }
     if(route.name == 'register') {
       return <Register navigator={navigator} />
     }
     if(route.name == 'login') {
       return <Login navigator={navigator} />
     }
     if(route.name == 'todolists') {
       return <TodoLists navigator={navigator} {...route.passProps}/>
     }
     if(route.name == 'todoitems') {
       return <Todo navigator={navigator} {...route.passProps} />
     }
    //  if(route.name == 'update') {
    //    return <Update navigator={navigator} {...route.passProps} />
    //  }
   }

   render() {
     return (
       <View style={styles.container}>
         <Navigator
           initialRoute={{name: 'root'}}
           renderScene={this.renderScene.bind(this)}
         />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
   },
 });


 AppRegistry.registerComponent('Todo', () => Main);
