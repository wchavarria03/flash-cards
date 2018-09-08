import FlashCard from './FlashCard';

class CardsBook {
  constructor(props) {
    this.cards = props.cards || [];
    this.currentCardIndex = props.currentCardIndex || 0;
    this.isFirstCard = this.currentCardIndex === 0;

    this.nextCard = this.nextCard.bind(this);
    this.getCurrentCard = this.getCurrentCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.updateFirstCard = this.updateFirstCard.bind(this);

    this.parseCards();
  }
  parseCards() {
    this.cards = this.cards.map(card => (new FlashCard(card)));
  }
  updateFirstCard() {
    this.isFirstCard = this.currentCardIndex === 0;
  }
  nextCard() {
    if (this.currentCardIndex < this.cards.length - 1) {
      this.currentCardIndex++;
    } else {
      // TODO: load more cards
    }
    this.updateFirstCard();
  }
  previousCard() {
    if (this.currentCardIndex > 0) {
      this.currentCardIndex--;
    }
    this.updateFirstCard();
  }
  getCurrentCard() {
    return this.cards[this.currentCardIndex];
  }
}

export default CardsBook;
