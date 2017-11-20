import { combineReducers } from 'redux';

// Actions
const ADD_DECK = 'flashcards/decks/ADD';
const RETRIEVE_DECKS = 'flashcards/decks/RETRIEVE';

// Action Creators
// TODO: Convert to Thunks

export const createDeck = (deck) => ({
  type: ADD_DECK,
  id: deck.id,
  deck,
});

export const retrieveDecks = {
  type: RETRIEVE_DECKS,
};

// Reducers

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return [...state, action.id];

    case RETRIEVE_DECKS:
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.id]: action.deck,
      };

    case RETRIEVE_DECKS:
    default:
      return state;
  }
};

export default combineReducers({
  allIds,
  byId,
});

// Selectors

export const selectDecks = (state) => state.allIds.map((id) => state.byId[id]);

export const selectDeckById = (state, id) => state.byId[id];
