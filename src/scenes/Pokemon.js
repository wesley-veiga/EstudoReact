import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import Button from '../components/Button/Button';
import listaEquipe from '../configs/equipe';

const {width, height} = Dimensions.get('window');

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sprites: null,
      url: this.props.item.url,
      ur2: this.props.item.url.abilities,
    };
  }

  salvarpokemon = () => {
    const pokemon = this.state.pokemon;
    if (listaEquipe.length < 6) {
      listaEquipe.push(pokemon);
      ToastAndroid.show('Pokemon adicionado com sucesso!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Pokedex cheia!', ToastAndroid.SHORT);
    }
  };

  componentDidMount() {
    this.getTipo();
  }

  getTipo = () => {
    this.setState({loading: true});
    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pokemon: res,
          sprites: res.sprites,
          url: res.next,
          loading: false,
        });
      });
  };

  render() {
    const sprites = this.state.sprites;
    if (this.state.loading) {
      return (
        <View>
          <Text>Carregando Pokemon!</Text>
        </View>
      );
    } else
      return (
        <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
          <View
            style={{
              alignItems: 'center',
              alignContent: 'center',
              paddingTop: 50,
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {this.state.pokemon.species.name}
            </Text>
          </View>

          <View style={{alignContent: 'space-around'}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator
              horizontal
              pagingEnabled>
              {sprites.front_default && (
                <Image
                  source={{uri: sprites.front_default}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.front_female && (
                <Image
                  source={{uri: sprites.front_female}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.front_shiny && (
                <Image
                  source={{uri: sprites.front_shiny}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.front_shiny_female && (
                <Image
                  source={{uri: sprites.front_shiny_female}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.back_default && (
                <Image
                  source={{uri: sprites.back_default}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.back_female && (
                <Image
                  source={{uri: sprites.back_female}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.back_shiny && (
                <Image
                  source={{uri: sprites.back_shiny}}
                  style={{width: width, height: 300}}
                />
              )}
              {sprites.back_shiny_female && (
                <Image
                  source={{uri: sprites.back_shiny_female}}
                  style={{width: width, height: 300}}
                />
              )}
            </ScrollView>
          </View>

          <View>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Habilidades
            </Text>
          </View>

          <View>
            <View>
              <FlatList
                data={this.state.pokemon.abilities}
                renderItem={({item}) => {
                  return (
                    <View style={{paddingLeft: 15, paddingTop: 10}}>
                      <Text style={{fontSize: 20, textTransform: 'capitalize'}}>
                        {item.ability.name}
                      </Text>
                    </View>
                  );
                }}
              />

              <View>
                <Text
                  style={{
                    paddingTop: 10,
                    paddingVertical: 10,
                    fontSize: 25,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Informações
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Peso:
                    </Text>
                    <Text>{this.state.pokemon.weight} kg</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      Altura:
                    </Text>
                    <Text>{this.state.pokemon.height} metros</Text>
                  </View>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 15}}>
                      XP Base
                    </Text>
                    <Text>{this.state.pokemon.base_experience}</Text>
                  </View>
                </View>
                <View style={{paddingTop: 50, alignItems: 'center'}}>
                  <Button title={'equipe'} action={this.salvarpokemon}>
                    <Text
                      style={{
                        color: 'white',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowRadius: 10,
                      }}>
                      Escolher Pokemon
                    </Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
  }
}

export default Pokemon;
