
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';
import { Actions } from 'react-native-router-flux';


class Home extends Component {

  state = {
    nome: "LOGO"
  }

  handlePress = () => {
    Actions.pagina2();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#D8D8D8", alignItems: "center" }}>

        <Logo title={this.state.nome} />

        <View style={{ flex: 2, alignItems: 'center'}}>

          <Button title={"Clique aqui"} action={this.handlePress}>
            <Text>Botão 1</Text>
          </Button>

          <Text style={{
            height: 30,
            fontSize: 12,
            lineHeight: 30       
          }}>------ texto legal aqui --------
          </Text>

          <Button title={"Clique aqui"} action={this.handlePress}>
          <Text>Botão 2</Text>
          </Button>



        </View>
          <Text style={{
              height: 300,
              fontSize: 12,
              lineHeight: 20
              
            }}> Lorem Ipsum is simply dummy text of the printing
          </Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
});

export default Home;
