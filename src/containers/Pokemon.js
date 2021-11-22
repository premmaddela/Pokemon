import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from '../actions/pokemonActions';
import _ from 'lodash';
import { Card } from 'antd';

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RenderData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return(
        <div>
        <div className='selectedPoke'>
            <Card bordered={false} style={{ width: 300, backgroundColor: 'lightgray' }}
            cover={<img alt="" src={pokeData.sprites.front_default} />} />
            <h1>{pokemonName.toUpperCase()}</h1>
        </div>
        <div style={{ display: 'inline-flex' }} className='selectedPoke'>
            <Card title='Stats' bordered={false} style={{ width: 300, backgroundColor: 'lightgray' }}>
            {pokeData.stats.map(i => {
              return (
                  <p>{i.stat.name}: {i.base_stat}</p>
              );
            })}
              <p>Height: {pokeData.height}</p>
              <p>Weight: {pokeData.weight}</p>
            </Card>
            <Card title='Abilities' bordered={false} style={{ width: 300, backgroundColor: 'lightgray' }}>
            {pokeData.abilities.map(i => {
              return (
                <p>{i.ability.name}</p>
              )
            })}
            </Card>
        </div>
        </div>
      )
    }

    if (pokemonState.loading) {
      return <p style={{ fontSize: '3rem' }}>Loading...</p>
    }

    if (pokemonState.errorMessage !== '') {
      return <p>{pokemonState.errorMessage}</p>
    }

    return <p>Error getting pokemon</p>
  }

  return(
    <div className={'poke'}>
      {RenderData()}
    </div>
  )
};

export default Pokemon;