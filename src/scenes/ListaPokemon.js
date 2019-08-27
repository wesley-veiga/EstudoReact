import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ListaPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      url: this.props.item.url,
    };
  }

  componentDidMount() {
    this.getTipo();
  }

  getTipo = () => {
    this.setState({loading: true});
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: res.pokemon,
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
    } else
      return (
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
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
                  Lista de Pokemons do tipo {this.props.item.name}
                </Text>
              </View>
            )}
            data={this.state.pokemon}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.pokemon({item: item.pokemon})}
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
                  {item.pokemon.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      );
  }
}

export default ListaPokemon;
