import React, {useEffect, useState} from 'react';
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
import {connect} from 'react-redux';
import {addPokemon} from '../actions';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');

const Pokemon = item => {
  const botao1 = () => {
    Actions.equipe();
  };

  const [values, setValues] = useState({
    loading: false,
    sprites: null,
    urlSprites: item.item.url,
    urlAbilities: item.item.url.abilities,
  });

  const salvarpokemon = () => {
    const pokemon = pokemon;
    if (pokemons.length < 6) {
      if (pokemons.findIndex(f => f.id == pokemon.id) != -1) {
        ToastAndroid.show('Pokemon já adicionado!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Pokemon adicionado!', ToastAndroid.SHORT);
        addPokemon(pokemon);
      }
    } else {
      ToastAndroid.show('Pokedex cheia!', ToastAndroid.SHORT);
    }
  };

  const getTipo = () => {
    setValues({...values, loading: true});
    // alert(JSON.stringify(values.urlSprites));
    fetch(values.urlSprites)
      .then(res => res.json())
      .then(res => {
        setValues({
          weight: res.weight,
          height: res.height,
          base_experience: res.base_experience,
          pokemon: res,
          sprites: res.sprites,
          abilities: res.abilities,
          loading: false,
        });
      });
  };

  useEffect(() => {
    getTipo();
  }, []);

  const weight = values.weight / 100;
  const height = values.height;
  const base_experience = values.base_experience;
  const sprites = values.sprites;
  const abilities = values.abilities;

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
          {item.item.name}
        </Text>
      </View>

      <View style={{alignContent: 'space-around'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator
          horizontal
          pagingEnabled>
          {sprites && sprites.front_default && (
            <Image
              source={{uri: sprites.front_default}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.front_female && (
            <Image
              source={{uri: sprites.front_female}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.front_shiny && (
            <Image
              source={{uri: sprites.front_shiny}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.front_shiny_female && (
            <Image
              source={{uri: sprites.front_shiny_female}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.back_default && (
            <Image
              source={{uri: sprites.back_default}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.back_female && (
            <Image
              source={{uri: sprites.back_female}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.back_shiny && (
            <Image
              source={{uri: sprites.back_shiny}}
              style={{width: width, height: 300}}
            />
          )}
          {sprites && sprites.back_shiny_female && (
            <Image
              source={{uri: sprites.back_shiny_female}}
              style={{width: width, height: 300}}
            />
          )}
        </ScrollView>
      </View>

      <ScrollView>
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
              data={abilities}
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
                  alignContent: 'center',
                }}>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>Peso:</Text>
                  <Text>{weight} kg</Text>
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    Altura:
                  </Text>
                  <Text>{height} Metros</Text>
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>
                    XP Base
                  </Text>
                  <Text>{base_experience}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    paddingTop: 50,
                    paddingRight: 20,
                    alignItems: 'center',
                  }}>
                  <Button title={'equipe'} action={botao1}>
                    <Text
                      style={{
                        color: '#FFFF',
                      }}>
                      Equipe
                    </Text>
                  </Button>
                </View>
                <View style={{paddingTop: 50, alignItems: 'center'}}>
                  <Button
                    style={{
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowOpacity: 0.8,
                      elevation: 6,
                      shadowRadius: 15,
                      shadowOffset: {width: 1, height: 13},
                    }}
                    title={'escolherpokemon'}
                    action={salvarpokemon}>
                    <Text
                      style={{
                        color: 'white',
                      }}>
                      Escolher Pokemon
                    </Text>
                  </Button>
                </View>
              </View>
              <View
                style={{
                  height: 10,
                  length: 10,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  pokemons: state.pokemons.pokemons,
});

const mapDispatchToProps = dispatch => ({
  addPokemon: pokemon => dispatch(addPokemon(pokemon)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokemon);
