import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';

class App extends React.Component{
  state = {
    inputVal: '',
  }

  changeText = v => {
    this.setState({
      inputVal: v
    });
  };

  getEmail = () => {
    alert("thank you get your email")
  }


  render() {
      const imageuri = "https://e7.pngegg.com/pngimages/168/671/png-clipart-music-player-logo-blue-area-text-brand-itunes-blue-text.png";

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Music Player</Text>
          <Image
            style={styles.logo}
            source={{
              uri: imageuri,
            }}
          />
        </View>

        <View style={styles.contentContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            keyboardType="email-address"
            onChangeText = {this.changeText}
            blurOnSubmit={true}
            value={this.state.inputVal}
          />
          <TouchableOpacity onPress={this.getEmail} style={styles.Button}>
            <Text style={styles.buttontext}>Enter</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.renderText}>{this.state.inputVal}</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#42c700',
    padding: 8,
  },
  title:{
    height: 10,
    marginLeft:50,
    marginTop: 10,
    padding: 50,
    color:'white',
    fontSize: 20,
  },
  logo: {
    width: 66,
    height: 58,
    marginLeft:110,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    color:'black',
    backgroundColor: 'white',

  },
  Button: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 10,
  },
  buttontext: {
    justifyContent: 'center',
    fontSize: 20,
    color:'black',
  },
  contentContainer: {
    justifyContent: 'center',
  },renderText:{
    color:'white'
  }
});
