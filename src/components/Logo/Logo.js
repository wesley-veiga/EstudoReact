import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Logo extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <Image source = {{this.props.image}} /> */}
        <Text style={{color: 'gray'}}>Lorem ipsum</Text>
        <Text style={{color: 'gray'}}>Lorem ipsum</Text>
      </View>
    );
  }
}

export default Logo;
