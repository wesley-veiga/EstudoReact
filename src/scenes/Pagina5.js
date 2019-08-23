import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

class Pagina5 extends Component {


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "pink" }}>

                <View style={{ flex: 1, maxHeight: 200, borderWidth: 1, margin: 5 }} />

                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 200 }} >
                    <View style={{ flex: 1, borderWidth: 1, margin: 5 }} />
                    <View style={{ flex: 1, borderWidth: 1, margin: 5 }} />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', maxHeight: 200 }} >
                    <View style={{ flex: 1, borderWidth: 1, margin: 5 }} />
                    <View style={{ flex: 1, borderWidth: 1, margin: 5 }} />
                </View>

                <View style={{ flex: 1, maxHeight: 200, borderWidth: 1, margin: 5 }} />







                {/* <View style={{ flex: 1, backgroundColor: "black" }}>
                    <Text>{this.props.gilberto.nome}</Text>
                    <View style={{ backgroundColor: "white" }}>
                        <Text>oi</Text>
                    </View>
                </View> */}
            </View>


        );
    }
}


export default Pagina5;
