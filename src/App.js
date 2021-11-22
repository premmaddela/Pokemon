import React from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={PokemonList} />
        <Route path={'/pokemon/:pokemon'} exact component={Pokemon} />
      </Switch>
    </div>
  );
}

export default App;