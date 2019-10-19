import React from 'react';
import {View, Button,StyleSheet,Text,} from 'react-native';

class Profile extends React.Component {
 
    static navigationOptions = { title: 'Profile',}; 

  render() {
    return (
<View>
       <View style = {styles.buttonContainer}>
           <Button title="Edit your password"color="#b0e0e6" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.buttonContainer}>
           <Button title="Edit your User Name"color="#b0e0e6" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.buttonContainer}>
           <Button title="Edit your Email"color="#b0e0e6" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.buttonContainer}>
           <Button title="Your Trips" color="#b0e0e6"onPress={() => this.props.navigation.navigate('Other')} />               
      </View>

</View>
    );
  }

}


const styles = StyleSheet.create({
 
  
  container: {
    paddingTop: 23
 },
 buttonContainer: {
    margin: 20,
    color: '#afeeee',
    marginTop: 32,
    marginBottom: 32,
      marginVertical: 8,
      borderBottomColor: '#737373',
      paddingTop:10
  },

});
 export default Profile ;