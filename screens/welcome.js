import React from 'react';
import {View, Button,StyleSheet,} from 'react-native';

class Welcome extends React.Component {
 

  static navigationOptions = { title: 'Welcome',}; 

  render() {
    return (
      <View>
       <View style = {styles.buttonContainer}>
         <Button title="Log in" color="#f194ff" onPress={this._logIn} />
       </View>

         <View style = {styles.buttonContainer}>
        <Button title="Sign up"  color="#f194ff"onPress={this._signOutAsync} />
        </View>

               
      </View>
    );
  }

  _logIn = () => {
    this.props.navigation.navigate('Login');
  };

  _signOutAsync = async () => {
    this.props.navigation.navigate('Register');
  };

}


const styles = StyleSheet.create({
 
  
  container: {
    paddingTop: 23
 },
 
buttonContainer: {
  margin: 20,
  color: 'blue',
  marginTop: 32,
  marginBottom: 32,
    marginVertical: 8,
    borderBottomColor: '#737373',
    paddingTop:10,
    color: 'powderblue', 

},

});
 export default Welcome ;