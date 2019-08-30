import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SearchBar from '../components/SearchBar';

class ListaPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      url: this.props.item.url,
      query: '',
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
          data: res.pokemon,
          pokemon: res.pokemon,
          url: res.next,
          loading: false,
        });
      });
  };

  onChangeQuery = query => {
    this.setState({query});

    var listPokemon = [...this.state.data];

    var listQuery = listPokemon.filter(f =>
      f.pokemon.name.toLowerCase().includes(query.toLowerCase()),
    );

    this.setState({pokemon: listQuery});
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
        <View style={{flex: 1, backgroundColor: '#FFFF'}}>
          <SearchBar
            onChangeText={text => this.onChangeQuery(text)}
            value={this.state.query}
          />
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
            style={{paddingHorizontal: 10}}
            data={this.state.pokemon}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => Actions.pokemon({item: item.pokemon})}
                style={{
                  height: 50,
                  backgroundColor: '#F1B140',
                  marginBottom: 10,
                  justifyContent: 'center',
                  borderRadius: 35,
                  shadowColor: 'rgba(0, 0, 0, 0.1)',
                  shadowOpacity: 0.8,
                  elevation: 6,
                  shadowRadius: 15,
                  shadowOffset: {width: 1, height: 13},
                }}>
                <Text
                  style={{
                    color: 'white',
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
