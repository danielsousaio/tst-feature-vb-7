import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  welcomeUser(name) {
    if (name) {
      return <Text style={styles.text}>Hello {name}!</Text>;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          My App
        </Text>
        <Text style={styles.text}>
          Enter your name!
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        {this.welcomeUser(this.state.name)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FC9F',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgb(97, 218, 251)'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  input: {
    height: 40,
    borderColor: 'lightgrey',
    borderWidth: 4,
    width: 150,
    fontSize: 10,
    padding: 8
  }
})

AppRegistry.registerComponent('App', () => App)