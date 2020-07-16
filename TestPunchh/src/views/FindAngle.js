
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class FindAngle extends Component {
  state = {
  };

  callFindAngle(hour, min) {
  
		var h = (hour * 360) / 12 + (min * 360) / (12 * 60);
		var m = (min * 360) / (60);
		var angle = Math.abs(h - m);
		if (angle > 180) {
			angle = 360 - angle;
		}

		return angle;
  }
  render() {
    return (
     <View style={styles.container}>
         <Text style={{color:'#333',fontSize:22,fontWeight: '600',margin:20}}>The angle at time 4:13 O’clock.</Text>

        <Text style={{color:'#333',fontSize:22,fontWeight: '600',margin:20}}>{this.callFindAngle(4,13)}</Text>
     </View>
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
 
});
