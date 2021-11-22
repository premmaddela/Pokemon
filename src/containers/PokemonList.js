import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { Card, List, Input } from 'antd';
import _ from 'lodash';
import { GetAllPokemons } from '../actions/pokemonActions';
import { Link } from 'react-router-dom';

const { Search } = Input;

const PokemonList = (props) => {
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.PokemonList);

  useEffect(() => {
    FetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FetchData = () => {
    dispatch(GetAllPokemons());
  };

  const RenderData = () => {
    if (pokemonList.loading) {
      return <p style={{ fontSize: '3rem' }}>Loading...</p>
    };

  const getImage = (e) => {
    const num = e.match(/\/pokemon\/(\d+)\//);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num[1]}.png`;
  };

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className='site-card-wrapper'>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
            }}
            dataSource={pokemonList.data}
            renderItem={(i) => (
            <List.Item>
              <Card 
                title={i.name}
                bordered={false}
                extra={<Link to={`/pokemon/${i.name}`}>View</Link>} 
                  hoverable
                  style={{ width: 240, backgroundColor: 'lightgray' }}
                  cover={<img alt="example" src={getImage(i.url)} />}>
              </Card>
            </List.Item>
            )}
          />
        </div>
      );
    };

    if (pokemonList.errorMessage !== '') {
      return <p>{pokemonList.errorMessage}</p>
    }

    return <p>Unable to get data</p>
  };

  return (
    <div>
      <div className={'search-wrapper'}>
				<Search 
				  placeholder='Input search text' 
					onChange={e => setSearch(e.target.value)} 
					style={{ width: '20rem' }} 
					onSearch={() => props.history.push(`/pokemon/${search}`)}
				/>
      </div>
      {RenderData()}
    </div>
  );
};

export default PokemonList;