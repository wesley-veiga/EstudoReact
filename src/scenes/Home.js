import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Button from '../components/Button/Button';
import {Actions} from 'react-native-router-flux';

class Home extends Component {
  // state = {
  //   image: '../images/logo.png',
  // };

  handlePress = () => {
    Actions.pagina4();
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#D8D8D8', alignItems: 'center'}}>
        <View style={{paddingTop: 30}}>
          <Image
            source={require('../images/logo.png')}
            style={{width: 200, height: 200}}
          />
        </View>

        <View style={{flex: 2, alignItems: 'center', paddingTop: 60}}>
          <View style={{paddingLeft: 30, paddingRight: 30}}>
            <Text
              style={{fontSize: 15, textAlign: 'center', alignItems: 'center'}}>
              Aplicativo criado com finalindade de estudo do React-Native,
              consumindo API do PokéApi, http://podeapi.co
            </Text>
          </View>

          <View style={{paddingTop: 70}}>
            <Button title={'Clique aqui'} action={this.handlePress}>
              <Text>Entrar</Text>
            </Button>
          </View>
        </View>
        {/* <View>
          <Text
            style={{
              height: 300,
              fontSize: 12,
              lineHeight: 20,
            }}>
            Lorem Ipsum is simply dummy text of the printing
          </Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
