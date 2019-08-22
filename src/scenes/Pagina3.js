import React, { Component } from 'react';
import { View, Text, Slider } from 'react-native';
import Button from '../components/Button/Button';
import { Actions } from 'react-native-router-flux';

class Pagina3 extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: 100,
            minimumValue: 0,
            maximumValue: 200
        }
    }
    handlePress = () => {
        Actions.pagina4();
      }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
                <Text>Home/Pagina2/Pagina3</Text>

                <View style={{ flex: 1, backgroundColor: "#FAFAFA", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{
                        fontSize: 25
                    }}>
                        Lorem Ipsum is simply
                    </Text>
                    <View style={{ height: 60, justifyContent: "flex-end", alignItems: "center" }}>
                        <Text style={{
                            textAlign: "center"
                        }}> e and scrambled it to make a type specimen book. It has survived not only five centuries </Text>
                    </View>
                </View>
                <View style={{ flex: 2, backgroundColor: "#FAFAFA" }}>
                    <View style={{ height: 150, justifyContent: "flex-end", alignItems: "center" }}>
                        
                        <Slider
                            style={{ width: 300 }}
                            step={10}
                            minimumValue={this.state.minimumValue}
                            maximumValue={this.state.maximumValue}
                            value={this.state.value}
                            onValueChange={val => this.setState({ value: val })}
                            minimumTrackTintColor="#000000"
                            maximumTrackTintColor="#000000"
                        />

                        <View style={{height: 30}}></View>

                        <View style={{ borderWidth: 1, padding: 8, paddingLeft: 20, paddingEnd: 20 }}>
                            <Text style={{fontSize: 18}}>
                                {'R$ ' + this.state.value }
                            </Text>
                        </View>

                    </View>
                    <View style={{ height: 100, justifyContent: "flex-end", alignItems: "center" }}>

                        <Button title={"BiTTi"} action={this.handlePress}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                                BiTTi
                            </Text>
                        </Button>

                    </View>


                </View>
                </View>

                );
            }
        };
    
    export default Pagina3;