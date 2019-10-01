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
import {useDispatch, useSelector} from 'react-redux';
import {addPokemon} from '../actions';
import {Actions} from 'react-native-router-flux';
import styles from '../components/style';

const {width} = Dimensions.get('window');

const Pokemon = ({item} = this.props) => {
  const botao1 = () => {
    Actions.equipe();
  };

  const dispatch = useDispatch();

  const pokemonLista = useSelector(store => store.PokemonReducer.list_pokemon);

  const [values, setValues] = useState({
    loading: false,
    sprites: null,
    urlSprites: item.url,
    urlAbilities: item.url.abilities,
  });

  const salvarpokemon = () => {
    const pokemon = values.pokemon;
    if (pokemonLista.length < 6) {
      if (pokemonLista.findIndex(f => f.id == pokemon.id) != -1) {
        ToastAndroid.show('Pokemon já adicionado!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Pokemon adicionado!', ToastAndroid.SHORT);
        dispatch(addPokemon(pokemon));
      }
    } else {
      ToastAndroid.show('Pokedex cheia!', ToastAndroid.SHORT);
    }
  };

  const getTipo = () => {
    setValues({...values, loading: true});
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
  const height = values.height / 10;
  const base_experience = values.base_experience;
  const sprites = values.sprites;
  const abilities = values.abilities;

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{item.name}</Text>
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
          <Text style={styles.textSubtitle}>Habilidades</Text>
        </View>

        <View>
          <View>
            <FlatList
              data={abilities}
              renderItem={({item}) => {
                return (
                  <View style={{paddingLeft: 15}}>
                    <Text style={styles.text}>{item.ability.name}</Text>
                  </View>
                );
              }}
            />

            <View>
              <Text style={styles.textSubtitle}>Informações</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignContent: 'center',
                }}>
                <View>
                  <Text style={styles.textBold}>Peso:</Text>
                  <Text style={styles.text}>{weight} kg</Text>
                </View>
                <View>
                  <Text style={styles.textBold}>Altura:</Text>
                  <Text style={styles.text}>{height} Metros</Text>
                </View>
                <View>
                  <Text style={styles.textBold}>XP Base</Text>
                  <Text style={styles.text}>{base_experience}</Text>
                </View>
              </View>
              <View style={{paddingTop: 30}} />
              <View style={styles.row}>
                <Button title={'equipe'} action={botao1}>
                  <Text style={styles.textButton}>Equipe</Text>
                </Button>
                <View style={{paddingLeft: 12}} />
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
                  <Text style={styles.textButton}>Escolher</Text>
                </Button>
              </View>
            </View>
            <View style={{paddingBottom: 30}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Pokemon;
