import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator,BottomTabBar,createMaterialTopTabNavigator } from "react-navigation-tabs";
import {createDrawerNavigator} from 'react-navigation-drawer';


import whereToGo from "../screens/whereToGo";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Home from "../screens/home";
import Register from "../screens/register";
import Other from "../screens/other";
import {View,TouchableOpacity,Text} from 'react-native';
import Profile from "../screens/profile";
import Settings from "../screens/settings";
import SideMenu from "../screens/sideMenu";
import Notifications from "../screens/Noti";
import Messages from "../screens/msg";
import Requests from "../screens/req";


import { theme } from "../constants";
//import { H } from "jest-haste-map";

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>

          <Text>|||||</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class TripsGoBack extends Component {
  //Structure for the navigatin Drawer
  _goBack = () => {
    //Props to open/close the drawer
    this.props.navigationProps.goBack();
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this._goBack.bind(this)}>

          <Text> Back </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const P = createStackNavigator(
  {
    Second: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: 'Profile',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#48d1cc',
        },
        headerTintColor: '#fff',
      }),
    },
  }
);
const S = createStackNavigator(
  {
    Second: {
      screen: Settings,
      navigationOptions: ({ navigation }) => ({
        title: 'Settings',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#f08080',
        },
        headerTintColor: '#fff',
      }),
    },
  }
);
const LogOut = createStackNavigator(
 { Second: {
  screen: Welcome,
  navigationOptions: ({ navigation }) => ({
    title: 'LogOut',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#5f9ea0',
    },
    headerTintColor: '#fff',
  }),
},}
);



const HH = createStackNavigator(
  { Second: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#c71585',
      },
      headerTintColor: '#fff',
    }),
  },}
);

const AuthStack = createStackNavigator({
  Welcome,
  Login,
  Register,
});


const HomeStack = createStackNavigator({
  Home:{screen:Home,navigationOptions: ({ navigation }) => ({
    title: 'Home',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
        backgroundColor: '#c71585',
    },
    headerTintColor: '#fff',
  }),
},
  Notifications: Notifications,
}, );

const NotifiStack = createStackNavigator({
 Notifications:Notifications,
 Messages:Messages,
});

const MsgStack = createStackNavigator({
  Messages:{screen:Messages,navigationOptions: ({ navigation }) => ({
    title: 'Your Trips',
    headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
  }),
},
  Profile:Profile,
 } , );

const TabScreens = createBottomTabNavigator(
  {
    Past:MsgStack,
    UpComing:Notifications,
    Family:Other,

  },
   tabBarOptions = {style: { backgroundColor: '#576000', },
  }
 
);
const TabS = createBottomTabNavigator(
  {
    Home:HomeStack,
    Notifications:Notifications,
    Messages:Messages,

  },
   tabBarOptions = {style: { backgroundColor: '#576000', },
  }
 
);



const HHH= createStackNavigator({TabS:TabS,
  navigationOptions: ({ navigation }) => ({
  title: 'The Upper',
  headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

  headerStyle: {
    backgroundColor: '#c71585',
  },
  headerTintColor: '#000000',
}),
}, {headerMode: 'none'}  );

const AAA= createStackNavigator({TabScreens:TabScreens,navigationOptions: ({ navigation }) => ({
      title: 'The Upper',
      headerLeft: <TripsGoBack navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#c71585',
      },
      headerTintColor: '#000000',
    }),
  }, {headerMode: 'none'}  );  //try this {headerMode: 'none'}); to hide the header

const Drawer = createDrawerNavigator({

  Home:HHH,
  YourTrips:AAA,
  Settings: S,
  Profile:P,
  LogOut: {
    //Title
    screen:Welcome,   // try this (screen:LogOut) and watch what happens
    navigationOptions: {
      drawerLabel: 'Log Out', //لو عملت هنا إنه السكرين هي الستاك اللي اسمه لوج أوت اللي هيحصل كالتالى 
                              //انه هينتقل للسكرين اللى اسمها ويلكم بس هيفضل في هيدر فوق وهيفضل ظاهر المنيو 
                              //ومش دا اللى انا عايزاه انا مش عايزاه ينقل كستاك انا عايزاه ينقل لسكرين واحدة فقط
    },
  },
},);
const AppCon = createAppContainer(
  createSwitchNavigator({
    AuthStack,
    Drawer,
    whereToGo,
  },
  
  {
    initialRouteName: 'whereToGo',
 
 })
);




export default AppCon;
