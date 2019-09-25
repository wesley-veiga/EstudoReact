import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button/Button';
import {Actions} from 'react-native-router-flux';

const Home = () => {
  const botao1 = () => {
    Actions.tipospokemon();
  };

  const botao2 = () => {
    Actions.equipe();
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 80}}>
        <Image
          source={require('../images/logo.png')}
          style={{width: 200, height: 200}}
        />
      </View>

      <View
        style={{
          flex: 2,
          alignItems: 'center',
          paddingTop: 60,
        }}>
        <View style={{paddingLeft: 30, paddingRight: 30}}>
          <Text
            style={{fontSize: 15, textAlign: 'center', alignItems: 'center'}}>
            Aplicativo criado com finalindade de estudo do React-Native,
            consumindo API do PokéApi, https://podeapi.co
          </Text>
        </View>

        <View
          style={{
            width: 300,
            paddingTop: 90,
          }}>
          <View>
            <Button title={'pokedex'} action={botao1}>
              <Text
                style={{
                  color: '#FFFF',
                  fontWeight: 'bold',
                }}>
                Pokedex
              </Text>
            </Button>
          </View>
          <View
            style={{
              paddingTop: 30,
            }}>
            <Button title={'equipe'} action={botao2}>
              <Text
                style={{
                  color: '#FFFF',
                  fontWeight: 'bold',
                }}>
                Equipe
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default Home;
