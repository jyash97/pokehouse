import axios from 'axios';

import { ALL_POKEMON_SUCCESS, SINGLE_POKEMON_SUCCESS, TOTAL_COUNT, RESET, GET_ALL, START_SEARCH, TYPE, NO_TYPE } from './action-types';

const getPokemonDetails = data => dispatch => {
  dispatch({type: ALL_POKEMON_SUCCESS, payload: data});
  data.map(a => axios.get(a.url).then(data => dispatch({type: SINGLE_POKEMON_SUCCESS, payload: data.data})));
};

export const allPokemon = (resultPerPage, resultIndex) => dispatch => axios
  .get(`https://pokeapi.co/api/v2/pokemon/?limit=${resultPerPage}&offset=${resultIndex}`)
  .then(data => dispatch(getPokemonDetails(data.data.results, data.count)));

export const reset = () => dispatch => {
  dispatch({
    type: RESET
  });
};

const getTotalCount = count => dispatch => {
  dispatch({type: TOTAL_COUNT, payload: count});
};

export const getCount = () => dispatch => axios
  .get(`https://pokeapi.co/api/v2/pokemon`)
  .then(data => dispatch(getTotalCount(data.data.count)));

export const searchResults = (text) => dispatch => {
  if (text.trim() !== '') {
    dispatch({
      type: START_SEARCH,
      payload: text
    });
  } else {
    dispatch({
      type: GET_ALL
    });
  }
};

export const filterType = (type) => dispatch => {
  if (type === '') {
    dispatch({
      type: NO_TYPE
    });
  } else {
    dispatch({
      type: TYPE,
      payload: type
    });
  }
};
