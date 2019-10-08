import React from 'react';
import {View, Button,StyleSheet,Text,} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

class Settings1 extends React.Component {
 
    //static navigationOptions = { title: 'Setings screen ',}; 
   // static navigationOptions = {  drawerLabel: 'Messages',};
  render() {
    return (
      
       <View style = {styles.container}>
         <Button
          title="Settings111"
          onPress={() => this.props.navigation.push('Settings')}/>
          <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go to notifications"/>
        
               
      </View>
    );
  }


}

const styles = StyleSheet.create({
 
  
  container: {
    paddingTop: 23
 },

});

 export default Settings1;
