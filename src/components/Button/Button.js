import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from '../style';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        activeOpacity={0.7}
        style={styles.buttonAlign}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default Button;
