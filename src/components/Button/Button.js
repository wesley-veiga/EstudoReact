import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.action} activeOpacity={.7} style={{  justifyContent: 'center', alignItems: 'center', height: 50, width: 300, backgroundColor: "grey", borderRadius: 25, lineHeight: 50 }}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

export default Button;