export const addPokemon = pokemon => ({
  type: 'ADD_POKEMON',
  pokemon,
});
export const removePokemon = pokemon => ({
  type: 'REMOVE_POKEMON',
  pokemon,
});
