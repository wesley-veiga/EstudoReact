import {createStore, combineReducers} from 'redux';
import {pokemons as PokemonReducer} from '../reducers';

const PokemonStore = createStore(
  combineReducers({
    PokemonReducer,
  }),
);

export default PokemonStore;
