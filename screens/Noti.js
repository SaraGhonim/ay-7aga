import React from 'react';
import {View, Button,StyleSheet,Text,TextInput,} from 'react-native';

class Other extends React.Component {


  
    toggleDrawer = ()=>{
      
      this.props.navigation.toggleDrawer();
  
    }
  
    render() {
      return (
        <View style = {styles.container}>
              <View style={styles.buttonContainer}>
           <Button title="toggle drawer"  color="#ffc0cb" onPress={this.toggleDrawer} />
           </View>
           <View style={styles.buttonContainer}>
           <Button title="Show me more of the app"  color="#ffc0cb" onPress={this._showMoreApp} />
           </View>
           
           <View style={styles.buttonContainer}>
           <Button title="Show my info"  color="#ffc0cb" onPress={this._showMyInfo} />
           </View>
  
           <View style={styles.buttonContainer}>
           <Button title="Actually, sign me out :)" color="#ffc9cb" onPress={this._signOutAsync} />
           </View> 
  
      
                
             </View>
  
            
      )
    }
    _showMyInfo = () => {
      this.props.navigation.navigate('Profile');
    };
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Welcome');
    };
  
  
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