import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  static navigationOptions = { title: 'Log in to the app!',}; 

    constructor(props){
        super(props);
       // this.handleChange=this.handleChange.bind(this);
        //this.sendData=this.sendData.bind(this);
    
        this.state ={
          text1:'',
          text2:'',
        }
      }
    
    //static navigationOptions = {
      //title: 'Please sign in',
    //};
  
    render() {
      return (
        <View  style = {styles.container}>
            <TextInput style = {styles.input}
               placeholderTextColor = "#9a73ef"
               placeholder="UserName"
               name ='UserName'
               value={this.state.text1}
               onChangeText={(text1) => this.setState({text1})}

               />
            <TextInput style = {styles.input}
               placeholderTextColor = "#9a73ef"
               placeholder="Password"
               name ='Password'

               value={this.state.text2}
               onChangeText={(text2) => this.setState( {text2})}


               />

         <View style={styles.buttonContainer}>
         <Button title="Sign in!" color='#7a42f4' onPress={this._signInAsync} />
          </View>
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    };
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
      paddingTop: 23
   },

      buttonContainer: {
        margin: 20,
        backgroundColor: 'powderblue',
        color: 'blue',
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
  
 export default Login;