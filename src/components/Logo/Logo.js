import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Logo extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 50 }}>{this.props.title}</Text>
                <Text style={{ color: "gray" }}>Lorem ipsum</Text>
                <Text style={{ color: "gray" }}>Lorem ipsum</Text>
            </View>
        )
    }
}

export default Logo;