import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import Button from '../components/Button/Button';
import {removePokemon} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import styles from '../components/style';

const {width, height} = Dimensions.get('window');

const Equipe = () => {
  const [list, setList] = useState([]);

  const dispatch = useDispatch();

  const apagarPokemon = pokemon => {
    setList([]);
    dispatch(removePokemon(pokemon));
  };

  const pokemonLista = useSelector(store => store.PokemonReducer.list_pokemon);

  useEffect(() => {
    setList(pokemonLista);
  }, [pokemonLista]);

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 30}}>
        <Text style={styles.textTitle}>Sua Equipe</Text>
      </View>
      <ScrollView>
        <View style={{paddingTop: 20, paddingLeft: 10}}>
          {pokemonLista.length == 0 ? (
            <Text style={styles.textSubtitle}>
              Por favor, selecione um pokemon
            </Text>
          ) : (
            <Text style={styles.text}>
              Total de Pokemons: {pokemonLista.length}.
            </Text>
          )}
        </View>
        <View
          style={{
            paddingTop: 22,
          }}>
          {list.map(pokemon => (
            <View style={{flexDirection: 'row', borderWidth: 1}}>
              <View style={{flex: 1}}>
                <Text style={styles.textTitle}>{pokemon.name}</Text>
                <Text style={styles.textBold}>Tipo:</Text>
                {pokemon.types.map(type => (
                  <Text style={styles.text}>{type.type.name}</Text>
                ))}
                <View>
                  <Text style={styles.textBold}>Habilidades:</Text>
                  {pokemon.abilities.map(ability => (
                    <Text style={styles.text}>{ability.ability.name}</Text>
                  ))}
                </View>
                <View style={{paddingBottom: 20}} />
              </View>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: pokemon.sprites.front_default}}
                  style={{width: 200, height: 200}}
                />
                <Button
                  title={'apagar'}
                  action={() => apagarPokemon(pokemon.id)}>
                  <Text style={styles.textButton}>Apagar</Text>
                </Button>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Equipe;
