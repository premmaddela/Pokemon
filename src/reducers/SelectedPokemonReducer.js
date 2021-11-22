const DefaultState = {
    loading: false,
    data: {},
    errorMessage: ''
  };
  
  const SelectedPokemonReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case 'SELECTED_POKEMON_LOADING':
        return {
          ...state,
          loading: true,
          errorMessage: 'Something went wrong'
        };
      case 'SELECTED_POKEMON_FAIL':
        return {
          ...state,
          loading: false,
          errorMessage: 'unable to find pokemon'
        };
      case 'SELECTED_POKEMON_SUCCESS':
        return {
          ...state,
          loading: false,
          errorMessage: 'Something went wrong',
          data: {
            ...state.data,
            [action.pokemonName]: action.payload
          }
        };
      default:
        return state
    }
  };
  
  export default SelectedPokemonReducer;
  