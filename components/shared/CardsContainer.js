import { connect } from 'react-redux';
import { getCardsForDeck } from '../../ducks';

const CardsContainer = ({ render, cards }) => render(cards);

const mapStateToProps = (state, { deckId }) => ({
  cards: getCardsForDeck(state, deckId),
});

export default connect(mapStateToProps, null)(CardsContainer);
