import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';
import {Actions} from 'react-native-router-flux';
import styles from '../components/style';
import {black} from 'ansi-colors';

const Home = () => {
  const botao1 = () => {
    Actions.tipospokemon();
  };

  const botao2 = () => {
    Actions.equipe();
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 80}} />
      <Image source={require('../images/logo.png')} style={styles.imageAlign} />
      <View>
        <Text style={styles.textAlign}>
          Aplicativo criado com finalindade de estudo do React-Native,
          consumindo API do PokéApi, https://podeapi.co
        </Text>
        <View>
          <Button title={'pokedex'} action={botao1}>
            <Text style={styles.textButton}>Pokedex</Text>
          </Button>
        </View>
        <View style={{paddingTop: 15}} />
        <Button title={'equipe'} action={botao2}>
          <Text style={styles.textButton}>Equipe</Text>
        </Button>
      </View>
    </View>
  );
};

export default Home;
