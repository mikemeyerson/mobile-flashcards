import { combineReducers } from 'redux';
import { saveDeckToStorage, loadDecksFromStorage } from '../utils/api';

// Actions
const ADD_DECK_SUCCESS = 'flashcards/decks/ADD_SUCCESS';
const ADD_DECK_FAILURE = 'flashcards/decks/ADD_FAILURE';
const RETRIEVE_DECKS_SUCCESS = 'flashcards/decks/RETRIEVE_SUCCESS';
const RETRIEVE_DECKS_FAILURE = 'flashcards/decks/RETRIEVE_FAILURE';

// Action Creators

export const createDeck = (deck) => (dispatch) =>
  saveDeckToStorage(deck)
    .then(() => {
      dispatch({
        type: ADD_DECK_SUCCESS,
        id: deck.id,
        deck,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_DECK_FAILURE,
        err,
      });
    });

export const retrieveDecks = () => (dispatch) => {
  loadDecksFromStorage()
    .then((decks) => {
      dispatch({
        type: RETRIEVE_DECKS_SUCCESS,
        decks,
      });
    })
    .catch((err) => {
      dispatch({
        type: RETRIEVE_DECKS_FAILURE,
        err,
      });
    });
};

// Reducers

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_DECK_SUCCESS:
      return [...state, action.id];

    case RETRIEVE_DECKS_SUCCESS:
      return [...Object.keys(action.decks)];

    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK_SUCCESS:
      return {
        ...state,
        [action.id]: action.deck,
      };

    case RETRIEVE_DECKS_SUCCESS:
      return {
        ...state,
        ...action.decks,
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

export const selectDecks = (state) => state.allIds.map((id) => state.byId[id]);

export const selectDeckById = (state, id) => state.byId[id];
