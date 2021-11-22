const DefaultState = {
    loading: false,
    data: [],
    errorMessage: '',
    count: 0
  };
  
  const PokemonListReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case 'GET_ALL_POKEMON_LOADING':
        return {
          ...state,
          loading: true,
          errorMessage: 'Something went wrong',
        };
      case 'GET_ALL_POKEMON_FAIL':
        return {
          ...state,
          loading: false,
          errorMessage: 'Something went wrong',
        };
      case 'GET_ALL_POKEMON_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload.results,
          errorMessage: '',
          count: action.payload.count
        };
      default:
        return state
    }
  };
  
  export default PokemonListReducer