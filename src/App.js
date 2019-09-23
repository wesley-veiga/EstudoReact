import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import Home from './scenes/Home';
import TiposPokemon from './scenes/TiposPokemon';
import ListaPokemon from './scenes/ListaPokemon';
import Pokemon from './scenes/Pokemon';
import Equipe from './scenes/Equipe';
import PokemonStore from './stores';

console.disableYellowBox = true;

const App = () => (
  <Provider store={PokemonStore}>
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} hideNavBar />
        <Scene key="tipospokemon" component={TiposPokemon} hideNavBar />
        <Scene key="listapokemon" component={ListaPokemon} hideNavBar />
        <Scene key="pokemon" component={Pokemon} hideNavBar />
        <Scene key="equipe" component={Equipe} hideNavBar />
      </Stack>
    </Router>
  </Provider>
);

export default App;
