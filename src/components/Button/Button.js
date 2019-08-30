import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        activeOpacity={0.7}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          backgroundColor: '#F1B140',
          borderRadius: 25,
          lineHeight: 50,
          paddingHorizontal: 10,
          minWidth: 150,
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowOpacity: 0.8,
          elevation: 6,
          shadowRadius: 15,
          shadowOffset: {width: 1, height: 13},
        }}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default Button;
