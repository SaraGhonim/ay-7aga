import React from 'react';
import {View, Button,StyleSheet,Text,} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

class Settings extends React.Component {
 
    //static navigationOptions = { title: 'Setings screen ',}; 
   // static navigationOptions = {  drawerLabel: 'Messages',};
  render() {
    return (
      <View>
       <View style = {styles.buttonContainer}>
         <Button
        title="Change Language" color="#191970"
          onPress={() => this.props.navigation.navigate('Settings')}/>
          </View>
                 <View style = {styles.buttonContainer}>

          <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Change city" color="#191970" />
        
               
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
  color: '#9acd32',
  marginTop: 32,
  marginBottom: 32,
    marginVertical: 8,
    borderBottomColor: '#9acd32',
    paddingTop:40
},

});

 export default Settings;
