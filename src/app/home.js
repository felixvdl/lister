'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  AlertIOS,
  Text,
  View
} from 'react-native';

const ACCESS_TOKEN = 'access_token';

export class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggenIn: "",
      accessToken: "",
    }
  }
  componentWillMount() {
    this.getToken();
  }
  async getToken() {
    try {
      let accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if(!accessToken) {
          this.redirect('login');
      } else {
          this.setState({accessToken: accessToken})
      }
    } catch(error) {
        this.redirect('login');
    }
  }
  async deleteToken() {
    try {
        await AsyncStorage.removeItem(ACCESS_TOKEN)
        this.redirect('root');
    } catch(error) {
    }
  }
  redirect(routeName){
    this.props.navigator.push({
      name: routeName,
      passProps: {
        accessToken: this.state.accessToken
      }
    });
  }
  onLogout(){
    this.deleteToken();
  }

  confirmDelete() {
    AlertIOS.alert("Are you sure?", "This action cannot be undone", [
      {text: 'Cancel'}, {text: 'Delete', onPress: () => this.onDelete()}
    ]);
  }

  async onDelete(){
    let access_token = this.state.accessToken
    try {
      let response = await fetch('https://tranquil-cliffs-26536.herokuapp.com/api/users/1', {
                              method: 'DELETE',
                              headers: {
                                'Authorization': access_token
                              },
                            });
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
          this.redirect('root');
        } else {
          let error = res;
          throw error;
        }
    } catch(error) {
    }
  }
  render() {
    //We check to se if there is a flash message. It will be passed in user update.
    let flashMessage;
    if (this.props.flash) {
       flashMessage = <Text style={styles.flash}>{this.props.flash}</Text>
    } else {
       flashMessage = null
    }
    return(
      <View style={styles.container}>
        {flashMessage}

        <View style={styles.logo}>
          <Text style={styles.logoText}>L</Text>
        </View>
        <Text style={styles.title}> Welcome</Text>
        <TouchableHighlight onPress={this.redirect.bind(this, 'todolists')} style={styles.button}>
          <Text style={styles.buttonText}>
            See lists
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onLogout.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={this.redirect.bind(this, 'update')} style={styles.button}>
          <Text style={styles.buttonText}>
            Update Account
          </Text>
        </TouchableHighlight> */}
        <TouchableHighlight onPress={this.confirmDelete.bind(this)} style={styles.button}>
          <Text style={styles.buttonText}>
            Delete Account
          </Text>
        </TouchableHighlight>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32425c',
    padding: 10,
    marginTop: -60
  },
  logo: {
    backgroundColor: '#e86c78',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  logoText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
    color: 'white'
  },
  text: {
    marginBottom: 30
  },
  button: {
    height: 50,
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
    marginTop: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#e2e6e9'
  },
  buttonText: {
    fontSize: 22,
    color: '#e2e6e9',
    alignSelf: 'center'
  },
  flash: {
    height: 40,
    backgroundColor: '#00ff00',
    padding: 10,
    alignSelf: 'center',
  },

});
