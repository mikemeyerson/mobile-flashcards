import { combineReducers } from 'redux';
import decksReducer, { selectDecks, selectDeckById } from './decks';
import cardsReducer, { selectCardsByDeckId } from './cards';

export const getDecks = (state) => selectDecks(state.decks);

export const getDeckById = (state, id) => selectDeckById(state.decks, id);

export const getCardsForDeck = (state, id) => selectCardsByDeckId(state.cards, id);

export default combineReducers({
  decks: decksReducer,
  cards: cardsReducer,
});
