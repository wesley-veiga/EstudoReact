import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

handlePress = () => {
  Actions.pagina3();
};

class TiposPokemons extends Component {
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
    this.setState({loading: true});

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
      <View style={{flex: 1, paddingHorizontal: 5, backgroundColor: '#FFFF'}}>
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
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Actions.listapokemon({item: item})}
              style={{
                height: 70,
                backgroundColor: '#F1B140',
                marginBottom: 10,
                justifyContent: 'center',
                borderRadius: 35,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingVertical: 10,
                  textTransform: 'capitalize',
                  textShadowOffset: {width: -1, height: 1},
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowRadius: 10,
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

export default TiposPokemons;
