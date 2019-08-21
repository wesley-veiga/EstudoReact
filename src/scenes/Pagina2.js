import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button/Button';
import { Actions } from 'react-native-router-flux';


class Pagina2 extends Component {

    handlePress = () => {
        Actions.pagina3();
      }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#E6E6E6" }}>
                <Text>Home/Pagina2</Text>

                <View style={{ flex: 1, backgroundColor: "#FAFAFA", alignItems: "center", justifyContent: "center" }}>

                    <Text style={{
                        fontSize: 30
                    }}> Yeni bir kart olu$turum
                    </Text>

                    <Text style={{
                        fontSize: 20
                    }}> Lorem Ipsum is simply dummy
                    </Text>

                    <Text style={{
                        lineHeight: 50,
                        fontSize: 12
                    }}> Lorem Ipsum is simply dummy
                    </Text>


                </View>
                <View style={{ flex: 2, backgroundColor: "#FAFAFA", alignItems: "center", justifyContent: "flex-start" }}>

                    <View style={{ height: 60 }}>
                        <Button title={"Clique aqui"}>
                            <Text>
                                Botão Teste 1
                            </Text>
                        </Button>
                    </View>
                    <View style={{ height: 60 }}>
                        <Button title={"Clique aqui"}>
                            <Text>
                                Botão Teste 2
                            </Text>
                        </Button>
                    </View>
                    <View style={{ height: 60 }}>
                        <Button title={"Clique aqui"}>
                            <Text>
                                Botão Teste 3
                            </Text>
                        </Button>
                    </View>

                    <View style={{ height: 100, justifyContent: "flex-end"}}>

                        <Button title={"Clique aqui"} action={this.handlePress}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                                Navegação pagina 3 ->
                            </Text>
                        </Button>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Pagina2;
