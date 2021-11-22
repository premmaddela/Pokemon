import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducer';
import SelectedPokemonReducer from './SelectedPokemonReducer';

const RootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  Pokemon: SelectedPokemonReducer
});

export default RootReducer;