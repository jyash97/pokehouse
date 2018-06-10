import {combineReducers} from 'redux';

import {ALL_POKEMON_SUCCESS, SINGLE_POKEMON_SUCCESS, TOTAL_COUNT, RESET, GET_ALL, START_SEARCH, TYPE, NO_TYPE} from './action-types';

const pokeReducer = (allpokemon = [], action) => {
  switch (action.type) {
    case ALL_POKEMON_SUCCESS:
      return action.payload;
    default:
      return allpokemon;
  }
};

const pokeDetails = (details = [], action) => {
  switch (action.type) {
    case SINGLE_POKEMON_SUCCESS:
      return [...details, action.payload];
    case RESET:
      return [];
    default:
      return details;
  }
};

const searchPoke = (search = false, action) => {
  switch (action.type) {
    case START_SEARCH:
      return {search: true, text: action.payload};
    case GET_ALL:
      return false;
    default:
      return false;
  }
};

const filterPoke = (type = false, action) => {
  switch (action.type) {
    case TYPE:
      return {filter: true, type: action.payload};
    case NO_TYPE:
      return false;
    default:
      return false;
  }
};

const totalCount = (details = 0, action) => {
  switch (action.type) {
    case TOTAL_COUNT:
      return action.payload;
    default:
      return details;
  }
};

export default combineReducers({
  allPokeDetails: pokeReducer,
  singleDetails: pokeDetails,
  searchPoke,
  totalCount,
  filterPoke
});
