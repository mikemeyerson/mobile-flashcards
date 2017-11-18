import { combineReducers } from 'redux';
import * as types from '../actions/types';

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_DECK:
      return [...state, action.id];

    case types.RETRIEVE_DECKS:
    case types.ADD_CARD_TO_DECK:
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_DECK:
      return {
        ...state,
        [action.id]: action.deck,
      };

    case types.RETRIEVE_DECKS:
    case types.ADD_CARD_TO_DECK:
    default:
      return state;
  }
};

export const getDecks = (state) =>
  state.allIds.map((id) => state.byId[id]);

export default combineReducers({
  allIds,
  byId,
});
