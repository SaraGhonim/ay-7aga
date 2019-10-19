import React from 'react';
import {View, Button,StyleSheet,Text,TextInput,} from 'react-native';

class Other extends React.Component {
 
    static navigationOptions=({  }) => ({
      title: 'Messages',
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#ffff',
    }); 

  render() {
    return (
      
       <View style = {styles.container}>
        <TextInput style = {styles.input}
               placeholderTextColor = "#9a98ef"
               placeholder="Password"
               name ='Password'

/>    
      </View>
    );
  }

  
}


const styles = StyleSheet.create({
 
  
  container: {
    paddingTop: 23
 },
 input: {
  margin: 15,
  height: 40,
  borderColor: '#7a42f4',
  borderWidth: 1},
  


});
 export default Other ;