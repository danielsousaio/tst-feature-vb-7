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
      value: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Visual App Builder
        </Text>
        <Text style={styles.text}>
          The preview is interactive!
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })}
        />
        <Text style={styles.text}>
          Hello {this.state.value}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 150,
    fontSize: 10,
    padding: 8
  }
})

AppRegistry.registerComponent('App', () => App)