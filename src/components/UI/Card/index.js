import React, { Component } from 'react';
import FlipCard from '@/components/UI/FlipCard';
import { Button } from 'reactstrap';
import CardsBook from '@/models/CardsBook';
import './card';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsBook: new CardsBook(props),
      card: {},
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
    } = this.state;
    return (
      <FlipCard flipped={this.state.card.flipped}>
        <section className="card">
          <div className="card__header">
            <div className="card__title">{card.title}</div>
            <div className="card__counter">{cardsBook.currentCardIndex + 1} / {cardsBook.cards.length}</div>
          </div>
          <div className="card__content">
            <div>{card.question}</div>
          </div>
          <div className="`card__footer`">
            <Button color="info" onClick={this.previousCard} disabled={cardsBook.isFirstCard} > Previous </Button>
            <Button color="danger" onClick={this.flipCard} > Flip! </Button>
            <Button color="success" onClick={this.learnedCard} > Learned </Button>
            <Button color="info" onClick={this.nextCard} > Next </Button>
          </div>
        </section>
      </FlipCard>
    );
  }
}

export default Card;
