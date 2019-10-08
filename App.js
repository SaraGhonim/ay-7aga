/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import AppContainer from './navigation';
import Drawer from './screens/drawer';


class App extends Component {
 

  render() {
    return (
      <View style = {{flex:1}}>
       {/* <AppContainer/>     */}
       <Drawer/>   
        </View>

          
    )
  }


}
  

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    fontSize: 45,
    marginTop: 220,
    padding:50 ,

  },
  container: {
    flex:1,
 },
  buttonContainer: {
    margin: 20
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1},

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
