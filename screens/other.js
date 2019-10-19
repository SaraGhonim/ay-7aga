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
} from 'react-native';

import Comp from '../components/comp';
//import NavigationDrawerStructure from '../navigation/index';
class Other extends React.Component {
 
  static navigationOptions=({  }) => ({
    title: 'Family',
    headerStyle: {
      backgroundColor: '#000344',
    },
    headerTintColor: '#ffff',
  }); 
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
       <Comp  handleInputs={this.handleInputs} /> 
       <TextInput style = {styles.input}
               placeholderTextColor = "#9a98ef"
               placeholder="Password"
               name ='Password'

/>    
      </View>
    );
  }

  
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