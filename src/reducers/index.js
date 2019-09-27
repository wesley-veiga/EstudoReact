const INITIAL_STATES = {
  list_pokemon: [],
};

export const pokemons = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        list_pokemon: [...state.list_pokemon, action.pokemon],
      };
    case 'REMOVE_POKEMON':
      return {
        ...state,
        list_pokemon: [
          ...state.list_pokemon.filter(f => f.id !== action.pokemon),
        ],
      };
    default:
      return state;
  }
};

export default pokemons;
