import axios from 'axios';

export const GetAllPokemons = () => async dispatch => {
  try {
    dispatch({
      type: 'GET_ALL_POKEMON_LOADING'
    });

    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')

    dispatch({
      type: 'GET_ALL_POKEMON_SUCCESS',
      payload: response.data
    })
  } catch (e) {
    dispatch({
      type: 'GET_ALL_POKEMON_FAIL',
    })
  }
};

export const GetPokemon = (pokemon) => async dispatch => {
  try {
    dispatch({
      type: 'SELECTED_POKEMON_LOADING'
    });

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: 'SELECTED_POKEMON_SUCCESS',
      payload: response.data,
      pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
      type: 'SELECTED_POKEMON_FAIL',
    })
  }
};