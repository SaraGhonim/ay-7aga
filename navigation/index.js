import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import whereToGo from "../screens/whereToGo";
import Welcome from "../screens/welcome";
import Login from "../screens/login";
import Home from "../screens/home";
import Register from "../screens/register";
import Other from "../screens/other";

import Profile from "../screens/profile";
import Settings from "../screens/settings";

import { theme } from "../constants";

const AppStack = createStackNavigator(
  {
    Home: Home,
    Other: Other,
    Settings: Settings,
    Profile: Profile
  },
  {
    initialRouteName: "Home"
  }
);

const AuthStack = createStackNavigator({
  Welcome,
  Login,
  whereToGo,
  Register,
});

//const AppSwitchNavigator = createSwitchNavigator(
//  {
//  whereToGo:whereToGo,
// App: AppStack,
//Auth: AuthStack,
//},
//{
//initialRouteName: 'Auth',
//}
// )

//createStackNavigator()
//const AppSwitchNavigator = createSwitchNavigator({
//whereToGo:whereToGo,
//welcome:welcome,
//login:login,
//register:register,
//home:home,
//profile:profile,
//settings:settings
//},{
//   initialRouteName:whereToGo,
//})

const AppCon = createAppContainer(
  createSwitchNavigator({
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth',
 
 })
);

export default AppCon;
