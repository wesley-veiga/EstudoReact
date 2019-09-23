export const pokemons = (state = {pokemons: []}, action) => {
  const newState = {...state};

  switch (action.type) {
    case 'ADD_POKEMON':
      newState.pokemons.push (action.pokemon);
      return newState;
    case 'REMOVE_POKEMON':
      newState.pokemons = newState.pokemons.filter (
        pokemon => pokemon.id != action.pokemon.id
      );
      return newState;
    default:
      return state;
  }
};
