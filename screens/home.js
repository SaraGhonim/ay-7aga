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
    Dimensions,
    Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Comp from '../components/comp';
import Settings from './settings'; 
import Notifications from "../screens/Noti";
import Messages from "../screens/msg";

import { createBottomTabNavigator,BottomTabBar } from "react-navigation-tabs";
import {createAppContainer,  createSwitchNavigator  } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from './welcome'; 
import Profile from './profile';
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
class Home extends React.Component {

static navigationOptions = { title: 'Welcome to the app!',}; 
constructor() {
  super()
  this.state = {
    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  }
}

// componentDidMount =(  )=> {
//   // const hasLocationPermission = this.hasLocationPermission();

//   //   if (!hasLocationPermission) return;
//   Geolocation.getCurrentPosition((position) => {
//     var lat = parseFloat(position.coords.latitude)
//     var long = parseFloat(position.coords.longitude)
//     var initialRegion = {
//       latitude: lat,
//       longitude: long,
//       latitudeDelta: LATITUDE_DELTA,
//       longitudeDelta: LONGITUDE_DELTA,
//     }

//     this.setState({initialPosition: initialRegion})
  
//   },
//   (error) => alert(JSON.stringify(error)),
//   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
// }

// hasLocationPermission = async () => {
//   if (Platform.OS === 'ios' ||
//       (Platform.OS === 'android' && Platform.Version < 23)) {
//     return true;
//   }

//   const hasPermission = await PermissionsAndroid.check(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//   );

//   if (hasPermission) return true;

//   const status = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
//   );

//   if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

//   if (status === PermissionsAndroid.RESULTS.DENIED) {
//     ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
//   } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//     ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
//   }

//   return false;
// }


  render() {
    
    return (
      <View style = {styles.container}>          
        
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       initialRegion={this.state.initialPosition}
     >
     </MapView>
              
           </View>

          
    )
  }
  

}

const HomeStack = createStackNavigator({
  Home: Home,
  Notifications: Notifications,
}, {
  headerMode: 'none'
});

const NotifiStack = createStackNavigator({
 Notifications:Notifications,
 Messages:Messages,
});

const MsgStack = createStackNavigator({
  Messages:Messages,
  Profile:Profile,
 });

const styles = StyleSheet.create({
  
  container: {
    flex:1,
 },

map:{
  flex:1,
},
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1},
  
});
const TabScreens = createBottomTabNavigator(
  {
    Home:HomeStack,
    Notifications:NotifiStack,
    Messages:MsgStack,

  },
 
);

export default Home;
  //export default createAppContainer(TabScreens);