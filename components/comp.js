import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
class Comp extends Component {
  
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.sendData=this.sendData.bind(this);

    this.state ={
      text1:'',
      text2:'',
      text3:'',
    }
  }

handleChange(name, value) {
  this.setState(() => ({ [name]: value }));
}
sendData() {  
  this.props.handleInputs(this.state.text1,this.state.text2);
  //alert("The user's phone is: " + this.state.text3 );

}
  render() {
    return (
      
      <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholderTextColor = "#9a73ef"
               placeholder="UserName"
               name ='UserName'
               value={this.state.text1}
               onChangeText={(text1) => this.setState({text1})}

               />
            <TextInput style = {styles.input}
               placeholderTextColor = "#9a98ef"
               placeholder="Email"
               name ='Email'

               value={this.state.text2}
               onChangeText={(text2) => this.setState( {text2})}


/>
             <TextInput style = {styles.input}
               placeholderTextColor = "#9a73ef"
               placeholder="PhoneNumber"
               name='PhoneNumber'
               value={this.state.text3}
               onChangeText={(text3) => this.setState({ text3})}

/>

              <View  style={styles.buttonContainer}>
                <Button 
                  onPress={this.sendData}
                 
                 title="Print"
                  />
               </View>
           </View>

          
    )
  }


}
  
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
      margin: 20
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


export default Comp;
