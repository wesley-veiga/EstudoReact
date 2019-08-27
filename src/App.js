import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './scenes/Home';
import TiposPokemon from './scenes/TiposPokemon';
import ListaPokemon from './scenes/ListaPokemon';
import Pokemon from './scenes/Pokemon';

console.disableYellowBox = true;

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} hideNavBar />
      <Scene key="tipospokemon" component={TiposPokemon} hideNavBar />
      <Scene key="listapokemon" component={ListaPokemon} hideNavBar />
      <Scene key="pokemon" component={Pokemon} hideNavBar />
    </Stack>
  </Router>
);

export default App;
