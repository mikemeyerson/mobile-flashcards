import { combineReducers } from 'redux';
import decksReducer, { selectDecks } from './decks';
import cardsReducer, { selectCardsByDeckId } from './cards';

export const getDecks = (state) => selectDecks(state.decks);

export const getCardsForDeck = (state, id) => selectCardsByDeckId(state.cards, id);

export default combineReducers({
  decks: decksReducer,
  cards: cardsReducer,
});
