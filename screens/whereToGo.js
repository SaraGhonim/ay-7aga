import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';

class WhereToGo extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async() => {
   const userToken = false;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');

  };

  // Render any loading content that you like here
  render() {
    return (
      <View style = {styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button title="Sign up" onPress={this.props.navigation.navigate('Welcome')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  
  container: {
    paddingTop: 23
 },

}); 

 export default WhereToGo ;