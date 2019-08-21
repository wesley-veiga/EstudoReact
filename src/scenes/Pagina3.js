import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import RangeButton from '../components/RangeButton/RangeButton';

import Button from '../components/Button/Button';

class Pagina3 extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6"}}>
                <Text>Home/Pagina2/Pagina3</Text>

                <View style={{ flex: 1, backgroundColor: "#FAFAFA", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
                    <Text style={{
                        fontSize: 25
                    }}>
                        Lorem Ipsum is simply
                    </Text>
                    <View style={{ height: 60, justifyContent: "flex-end", alignItems: "center"}}>
                        <Text style={{
                            textAlign: "center"
                        }}> e and scrambled it to make a type specimen book. It has survived not only five centuries </Text>
                    </View>
                </View>
                <View style={{ flex: 2, backgroundColor: "blue"}}>
                    <View style={{ height: 60, justifyContent: "flex-end", alignItems: "center"}}>
                        <RangeButton title={"Range"}>
                            
                        </RangeButton>
                    </View>

                </View>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
});

export default Pagina3;
