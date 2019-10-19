import React from 'react';
import {View, Button,StyleSheet,Text,} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

class Settings1 extends React.Component {
 
    //static navigationOptions = { title: 'Setings screen ',}; 
   // static navigationOptions = {  drawerLabel: 'Messages',};
  render() {
    return (
      <View>
       <View style = {styles.buttonContainer}>
       <Button onPress={() => this.props.navigation.navigate('Profile')}  title="Profile"/>
        
       <Button title="Settings"  onPress={() => this.props.navigation.navigate('Settings')}/>
       <Button title="Log Out"  onPress={() => this.props.navigation.navigate('Welcome')}/>

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
    color: '#faf0e6',
    marginTop: 32,
    marginBottom: 32,
      marginVertical: 8,
      borderBottomColor: '#faf0e6',
      paddingTop:10
  },
});

 export default Settings1;
