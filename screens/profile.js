import React from 'react';
import {View, Button,StyleSheet,Text,} from 'react-native';

class Profile extends React.Component {
 
    static navigationOptions = { title: 'Profile',}; 

  render() {
    return (
<View>
       <View style = {styles.container}>
           <Button title="Edit your password" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.container}>
           <Button title="Edit your User Name" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.container}>
           <Button title="Edit your Email" onPress={() => this.props.navigation.navigate('Other')} />               
      </View>
      <View style = {styles.container}>
           <Button title="Your Trips" onPress={() => this.props.navigation.navigate('Other')} />               
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
    color: 'blue',
    marginTop: 32,
    marginBottom: 32,
      marginVertical: 8,
      borderBottomColor: '#737373',
      paddingTop:10
  },

});
 export default Profile ;