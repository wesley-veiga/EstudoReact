import {createStore, combineReducers} from 'redux';
import {pokemons} from '../reducers';

const PokemonStore = createStore (
  combineReducers ({
    pokemons,
  })
);

export default PokemonStore;
