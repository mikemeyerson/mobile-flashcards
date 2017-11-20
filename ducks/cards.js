import { combineReducers } from 'redux';

// Actions
const ADD_CARD_TO_DECK = 'flashcards/cards/ADD';

// Action Creators
// TODO: Convert to Thunks

export const addCardToDeck = (card) => ({
  type: ADD_CARD_TO_DECK,
  id: card.id,
  card,
});

// Reducers
const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return [...state, action.id];
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.id]: action.card,
      };
    default:
      return state;
  }
};

export default combineReducers({
  allIds,
  byId,
});

// Selectors

export const selectCardsByDeckId = (state, deckId) =>
  state.allIds.filter((id) => deckId === state.byId[id].parentId).map((id) => state.byId[id]);
