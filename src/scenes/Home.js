import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Button from '../components/Button/Button';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  botao1 = () => {
    Actions.tipospokemon();
  };

  botao2 = () => {
    Actions.equipe();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
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
              consumindo API do PokéApi, http://podeapi.co
            </Text>
          </View>

          <View
            style={{
              width: 300,
              paddingTop: 90,
            }}>
            <View>
              <Button title={'pokedex'} action={this.botao1}>
                <Text
                  style={{
                    color: '#FFFF',
                    fontWeight: 'bold',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowRadius: 10,
                  }}>
                  Pokedex
                </Text>
              </Button>
            </View>
            <View
              style={{
                paddingTop: 30,
              }}>
              <Button title={'equipe'} action={this.botao2}>
                <Text
                  style={{
                    color: '#FFFF',
                    fontWeight: 'bold',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowRadius: 10,
                  }}>
                  Equipe
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
