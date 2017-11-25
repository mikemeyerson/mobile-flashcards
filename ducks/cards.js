import { combineReducers } from 'redux';
import { saveCardToStorage, loadCardsFromStorage } from '../utils/api';

// Actions
const ADD_CARD_SUCCESS = 'flashcards/cards/ADD_SUCCESS';
const ADD_CARD_FAILURE = 'flashcards/cards/ADD_FAILURE';
const RETRIEVE_CARDS_SUCCESS = 'flashcards/cards/RETRIEVE_SUCCESS';
const RETRIEVE_CARDS_FAILURE = 'flashcards/cards/RETRIEVE_FAILURE';

// Action Creators

export const addCardToDeck = (card) => (dispatch) =>
  saveCardToStorage(card)
    .then(() =>
      dispatch({
        type: ADD_CARD_SUCCESS,
        id: card.id,
        card,
      }))
    .catch((err) =>
      dispatch({
        type: ADD_CARD_FAILURE,
        err,
      }));

export const retrieveCards = () => (dispatch) =>
  loadCardsFromStorage()
    .then((cards) => {
      dispatch({
        type: RETRIEVE_CARDS_SUCCESS,
        cards,
      });
    })
    .catch((err) =>
      dispatch({
        type: RETRIEVE_CARDS_FAILURE,
        err,
      }));

// Reducers

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD_SUCCESS:
      return [...state, action.id];

    case RETRIEVE_CARDS_SUCCESS:
      return [...Object.keys(action.cards)];

    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        [action.id]: action.card,
      };

    case RETRIEVE_CARDS_SUCCESS:
      return {
        ...state,
        ...action.cards,
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
