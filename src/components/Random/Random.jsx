import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '@/components/UI/Card';

const titleStyle = {
  fontSize: '100px',
  fontWeight: 100,
  textAlign: 'center',
  color: 'rgba(47, 134, 175, 0.75)',
};

export default class Random extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      cards: [
        {
          title: 'asd1',
          content: 'asd1',
          answer: 'asdAnswer1'
        },
        {
          title: 'asd2',
          content: 'asd2',
          answer: 'asdAnswer2'
        }
      ],
    }
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <h1 style={titleStyle}>Random Cards</h1>
        <Card cards={this.state.cards}/>
      </React.Fragment>
    );
  }
}