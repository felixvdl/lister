import React, { Component } from 'react';
import {View, Text} from 'react-native';

export class Reddit extends Component {
  constructor() {
    super()
    this.state= {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://www.reddit.com/.json', {
      Accept: 'Application/json'
    })
    .then(res => res.json())
    .then(data => this.setState({posts: data.data.children}))
  }
  render() {
    return(
      <View>
        <Text>reddit</Text>
        <View>
          {this.state.posts.map((post,i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}
