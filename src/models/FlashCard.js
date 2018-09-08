class FlashCard {
  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.question = props.content;
    this.answer = props.answer;
    this.flipped = false;
    this.content = this.question;
    this.tags = props.tags || [];

    this.flipCard = this.flip.bind(this);
  }
  flip() {
    this.flipped = !this.flipped;
    this.content = this.flipped ? this.answer : this.question;
  }
}
export default FlashCard;
