import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';
const CARDS_STORAGE_KEY = 'mobile-flashcards:cards';

export function loadDecksFromStorage() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function saveDeckToStorage(deck) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck,
    }),
  );
}

export function loadCardsFromStorage() {
  return AsyncStorage.getItem(CARDS_STORAGE_KEY).then(JSON.parse);
}

export function saveCardToStorage(card) {
  return AsyncStorage.mergeItem(
    CARDS_STORAGE_KEY,
    JSON.stringify({
      [card.id]: card,
    }),
  );
}

// Use for Dev only!
export function clearStorage() {
  return Promise.all([
    AsyncStorage.removeItem(DECKS_STORAGE_KEY),
    AsyncStorage.removeItem(CARDS_STORAGE_KEY),
  ]);
}
