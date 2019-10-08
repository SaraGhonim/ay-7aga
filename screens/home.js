import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Alert,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import Comp from '../components/comp';
import Settings from './settings'; 
import Other from './other'; 
import Profile from './profile'; 
import drawer from './drawer';


import {createAppContainer,  createSwitchNavigator  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Welcome from './welcome'; 


class Home extends React.Component {

static navigationOptions = { title: 'Welcome to the app!',}; 

  constructor(){
    super();
    this.state={
      email:'jhjhk',
      userName:'jkk',}
    
    this.handleInputs=this.handleInputs.bind(this);
  }

handleInputs= (userName,email) =>{
   this.setState({userName });
  this.setState({ email});
  //this.setState({ userName:userName});
     
  setTimeout(()=>{alert("The userName is: "+ this.state.userName+ " and the email is: "+this.state.email );},3000);

}

  render() {
    return (
      <View style = {styles.container}>
           {/* <Comp  handleInputs={this.handleInputs} /> */}
         <View style={styles.buttonContainer}>
         <Button title="Show me more of the app"  color="#f194ff" onPress={this._showMoreApp} />
         </View>
         
         <View style={styles.buttonContainer}>
         <Button title="Show my info"  color="#f194ff" onPress={this._showMyInfo} />
         </View>

         <View style={styles.buttonContainer}>
         <Button title="Actually, sign me out :)" color="#f194ff" onPress={this._signOutAsync} />
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

const H = createStackNavigator({
  Home: {screen:Home,},
},
{
  initialRouteName: 'Home',

}
);
const S = createStackNavigator({
  Home: Home,
  Settings:Settings,

},
{
  initialRouteName: 'Settings',

}
);


const P = createStackNavigator({
  Home:Home,
  Profile: Profile,
},

{
  initialRouteName: 'Profile',

}
);


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
  color: 'blue',
  marginTop: 32,
  marginBottom: 32,
    marginVertical: 8,
    borderBottomColor: '#737373',
    paddingTop:10
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



  export default createAppContainer(createBottomTabNavigator({Home:H,Settings:S,Profile:P}));