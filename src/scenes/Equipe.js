import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import Button from '../components/Button/Button';
import {connect} from 'react-redux';
import {removePokemon} from '../actions';

const {width, height} = Dimensions.get ('window');

class Equipe extends Component {
  apagarPokemon = pokemon => {
    this.props.removePokemon (pokemon);
  };

  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFF',
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View style={{paddingTop: 30}}>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Sua Equipe
          </Text>
        </View>
        <ScrollView>
          <View style={{paddingTop: 20, paddingLeft: 10}}>
            {this.props.pokemons.length == 0
              ? <Text style={{fontSize: 20}}>
                  Por favor, selecione um pokemon
                </Text>
              : <Text style={{fontSize: 20}}>
                  Total de Pokemons: {this.props.pokemons.length}.
                </Text>}
          </View>
          <View
            style={{
              paddingTop: 22,
            }}
          >
            {this.props.pokemons.map (pokemon => (
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}
                  >
                    {pokemon.name}
                  </Text>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}
                  >
                    Tipo:
                  </Text>
                  {pokemon.types.map (type => (
                    <Text
                      style={{
                        textTransform: 'capitalize',
                        fontSize: 15,
                      }}
                    >
                      {type.type.name}
                    </Text>
                  ))}
                  <View>
                    <Text
                      style={{
                        textTransform: 'capitalize',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}
                    >
                      Habilidades:
                    </Text>
                    {pokemon.abilities.map (ability => (
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          fontSize: 15,
                        }}
                      >
                        {ability.ability.name}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Image
                    source={{uri: pokemon.sprites.front_default}}
                    style={{width: 200, height: 200}}
                  />
                  <Button
                    title={'equipe'}
                    action={() => this.apagarPokemon (pokemon)}
                  >
                    <Text
                      style={{
                        color: '#FFFF',
                        fontWeight: 'bold',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowRadius: 10,
                      }}
                    >
                      Apagar
                    </Text>
                  </Button>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
});

const mapDispatchToProps = dispatch => ({
  removePokemon: pokemon => dispatch (removePokemon (pokemon)),
});

export default connect (mapStateToProps, mapDispatchToProps) (Equipe);
