import * as types from './types';

// TODO: Convert to Thunks

export const createDeck = (deck) => ({
  type: types.CREATE_DECK,
  id: deck.id,
  deck,
});

export const retrieveDecks = {
  type: types.RETRIEVE_DECKS,
};

export const addCardToDeck = (id, card) => ({
  type: types.ADD_CARD_TO_DECK,
  id,
  card,
});
