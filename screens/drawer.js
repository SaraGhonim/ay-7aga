import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

class Settings1 extends React.Component {
  //static navigationOptions = { title: 'Setings screen ',};
  // static navigationOptions = {  drawerLabel: 'Messages',};
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Go to notifications"
        />
      </View>
    );
  }
}
class Settings2 extends React.Component {
  //static navigationOptions = { title: 'Setings screen ',};
  // static navigationOptions = { drawerLabel: 'Notifications'};
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Settings222"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23
  }
});
const MyDrawerNavigator = createDrawerNavigator({
  Screen1: Settings1,
  Screen2: Settings2
});
export default createAppContainer(MyDrawerNavigator);
