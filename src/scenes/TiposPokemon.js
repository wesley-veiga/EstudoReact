import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SearchBar from '../components/SearchBar';

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
        // alert(JSON.stringify(res));
        this.setState({
          data: res.results,
          pokemon: res.results,
          url: res.next,
          loading: false,
        });
      });
    // .catch(err => alert(JSON.stringify(err)));
  };

  onChangeQuery = query => {
    this.setState({query});

    var listPokemon = [...this.state.data];

    var listQuery = listPokemon.filter(f =>
      f.name.toLowerCase().includes(query.toLowerCase()),
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
    }

    return (
      <View style={{flex: 1, paddingHorizontal: 5, backgroundColor: '#FFFF'}}>
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
                Escolha o tipo de Pokemon
              </Text>
            </View>
          )}
          data={this.state.pokemon}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Actions.listapokemon({item: item})}
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
