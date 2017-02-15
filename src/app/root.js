'use strict';
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View
} from 'react-native';
const ACCESS_TOKEN = 'access_token';

export class Root extends Component {

  componentWillMount() {
    this.getToken();
  }
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          console.log("Token not set");
      } else {
          this.verifyToken(accessToken)
      }
    } catch(error) {
        console.log("Something went wrong");
    }
  }
  //If token is verified we will redirect the user to the home page
  async verifyToken(token) {
    let accessToken = token

    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/verify?session%5Baccess_token%5D='+accessToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect him to home.
        this.navigate('home');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error response: " + error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>L</Text>
        </View>
        <Text style={styles.title}>lister </Text>
        <Text style={styles.description}>Todo lists made simple</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight onPress={ this.navigate.bind(this,'register') } style={styles.buttonRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={ this.navigate.bind(this, 'login') } style={styles.buttonLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#32425c',
    padding: 10,
    paddingTop: 150
  },
  logo: {
    backgroundColor: '#e86c78',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  logoText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  buttonLogin: {
    height: 50,
    backgroundColor: 'transparent',
    width: 150,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#e2e6e9',
    left: 10
  },
  buttonRegister: {
    height: 50,
    backgroundColor: 'transparent',
    width: 150,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#e2e6e9',
    right: 10,
  },
  buttonText: {
    fontSize: 22,
    color: '#e2e6e9',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 5,
    color: 'white'
  },
  description: {
    fontSize:12,
    color: '#a1b2ce',
    marginBottom: 20
  }
});
