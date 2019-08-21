import React, { Component } from 'react';
import { Slider } from 'react-native';

class RangeButton extends Component {
    render() {
        return (
            
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Slider
                value={this.state.value}
                onValueChange={value => this.setState({ value })}
            />
            <Text>Value: {this.state.value}</Text>

            </View>
        )
    }
}