import React from 'react';
import { Button } from 'reactstrap';
import CardsBook from '@/models/CardsBook';
import './card';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsBook: new CardsBook(props),
      card: {},
      content: '',
    };

    this.updateCard = this.updateCard.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.learnedCard = this.learnedCard.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
  }
  componentWillMount() {
    this.updateCard();
  }
  updateCard() {
    this.setState({
      card: this.state.cardsBook.getCurrentCard(),
    });
    this.setState(prevState => ({
      content: prevState.card.content,
    }));
  }
  flipCard() {
    this.state.card.flip();
    this.updateCard();
  }
  learnedCard() {
    // TODO: Send Request to the BE and mark this card as learned
    // .markAsLearned(this.state.card.id);
    this.nextCard();
  }
  previousCard() {
    this.state.cardsBook.previousCard();
    this.updateCard();
  }

  nextCard() {
    this.state.cardsBook.nextCard();
    this.updateCard();
  }

  render() {
    let {
      cardsBook,
      card,
      content,
    } = this.state;
    return (
      <section className="card">
        <div className="card__header">
          <div>
            {card.title}
          </div>
          <div>
            {cardsBook.currentCardIndex + 1} / {cardsBook.cards.length}
          </div>
        </div>
        <div className="card__content">
          {content}
        </div>
        <div className="card__footer">
          <Button color="info" onClick={this.previousCard} disabled={cardsBook.isFirstCard} > Previous </Button>
          <Button color={card.flipped ? 'secondary' : 'success'} onClick={this.flipCard} > Flip! </Button>
          <Button color="warning" onClick={this.learnedCard} > Learned </Button>
          <Button color="info" onClick={this.nextCard} > Next </Button>
        </div>
      </section>
    );
  }
}

export default Card;
