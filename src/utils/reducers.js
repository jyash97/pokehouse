import {combineReducers} from 'redux';

import {ALL_POKEMON_SUCCESS, SINGLE_POKEMON_SUCCESS, TOTAL_COUNT} from './action-types';

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
    case 'RESET':
      return [];
    default:
      return details;
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
  totalCount
});
