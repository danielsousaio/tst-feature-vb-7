import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
//import Slider from '@react-native-community/slider';
//const Button = require("daniel-test").Button;
//const ApplicationProvider = require("daniel-test").ApplicationProvider;
//const Layout = require("daniel-test").Layout;
//const eva = require("daniel-test").eva;
import { ApplicationProvider, Layout, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  welcomeUser(name) {
    if (name) {
      return <Text style={styles.text}>Hello {name}!!</Text>;
    }
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout>
          <View style={styles.container}>
            <Button>
              UI-Kitten Button!
            </Button>
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
        </Layout>
      </ApplicationProvider>
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