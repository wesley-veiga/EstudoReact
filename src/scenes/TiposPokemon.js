import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import SearchBar from '../components/SearchBar';
import styles from '../components/style';

const TiposPokemons = () => {
  const [values, setValues] = useState({
    loading: false,
    pokemon: [],
    url: 'https:pokeapi.co/api/v2/type/',
    query: '',
  });

  const getTipo = () => {
    setValues({...values, loading: true});
    fetch(values.url)
      .then(res => res.json())
      .then(res => {
        setValues({
          loading: false,
          pokemon: res.results,
          url: res.next,
          query: '',
          data: res.results,
        });
      });
  };

  useEffect(() => {
    getTipo();
  }, []);

  const onChangeQuery = query => {
    var x = query;
    var listPokemon = [...values.data];

    var listQuery = listPokemon.filter(f =>
      f.name.toLowerCase().includes(query.toLowerCase()),
    );

    setValues({...values, query: x, pokemon: listQuery});
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 5, backgroundColor: '#FFFF'}}>
      <SearchBar
        onChangeText={text => onChangeQuery(text)}
        value={values.query}
      />
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.textTitle}>Escolha o tipo de Pokemon</Text>
          </View>
        )}
        data={values.pokemon}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Actions.listapokemon({item: item})}
            style={styles.buttonStyle}>
            <Text style={styles.textButton}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default TiposPokemons;
