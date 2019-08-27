import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

handlePress = () => {
    Actions.pagina3();
};

class Pagina4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pokemon: [],
            url: 'https://pokeapi.co/api/v2/type/',
        };
    }

    componentDidMount() {
        this.getTipo();
    }

    getTipo = () => {
        this.setState({ loading: true });

        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    pokemon: res.results,
                    url: res.next,
                    loading: false,
                });
            });
    };

    render() {
        if (this.state.loading) {
            return (
                <View>
                    <Text>Carregando tipos de Pokemon!</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1, paddingHorizontal: 5, backgroundColor: '#F9F9F9' }}>
                <FlatList
                    ListHeaderComponent={() => (
                        <View>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    paddingVertical: 30,
                                }}>
                                Lista de tipos de Pokemons
                            </Text>
                        </View>
                    )}
                    data={this.state.pokemon}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => Actions.pagina5({ item: item })}
                            style={{
                                height: 100,
                                backgroundColor: '#bdc3c7',
                                marginBottom: 5,
                                justifyContent: 'center',
                                borderRadius: 5,
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    textTransform: 'capitalize',
                                }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

export default Pagina4;
