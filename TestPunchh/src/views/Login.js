
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from 'react-native';
import * as images from '../../src/images';
import * as HOC from '../../src//hoc';

const DismissKeyboardView = HOC.DismissKeyboardHOC(View);
const FullSCreenSpinnerAndDismissKeyboardView = HOC.FullScreenSpinnerHOC(
  DismissKeyboardView
);

const KeyboardAwareImage = HOC.KeyboardAwareHOC(Image);
const KeyboardAwareView = HOC.KeyboardAwareHOC(View);

export default class Login extends Component {
  state = {
    logging: false
  };
  async callLoginAPI() {
    this.setState({ logging: true });
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    this.props.navigation.navigate('ITunesSongs')
    this.setState({ logging: false });
  }

  async findAngleNavigate() {
   
    this.props.navigation.navigate('FindAngle')
    
  }


  render() {
    return (
      <FullSCreenSpinnerAndDismissKeyboardView
        spinner={this.state.logging}
        style={styles.container}
      >
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>

          <TextInput placeholder="Username" style={[styles.textInput]} />
          <TextInput
            placeholder="Password"
            style={[styles.textInput, { marginVertical: 20 }]}
          />

          <TouchableOpacity
            onPress={() => {
              this.callLoginAPI();
            }}
            style={[styles.button]}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.findAngleNavigate();
            }}
            style={[styles.button]}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>
              Find Angle
            </Text>
          </TouchableOpacity>


        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            height: 40,
            justifyContent: 'center',
            marginBottom: 20
          }}
        >
       
        </TouchableOpacity>
      
      
      </FullSCreenSpinnerAndDismissKeyboardView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 18
  },
  textInput: {
    height: 60,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 19
  },
  button: {
    height: 40,
    borderRadius: 3,
    backgroundColor: '#c0a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
  }
});
