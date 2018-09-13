import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: this.props.flipped,
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      isFlipped: newProps.flipped,
    });
  }
  render() {
    return (
      <div className={`ReactFlipCard ${this.state.isFlipped ? ' ReactFlipCard--flipped' : ''}`}>
        <div className="ReactFlipCard__Flipper">
          <div className="ReactFlipCard__Content">
            {this.props.children}
          </div>
          {/* <div className="ReactFlipCard__Sides ReactFlipCard__Back"> */}
          {/* {this.props.children[1]} */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

FlipCard.propTypes = {
  flipped: PropTypes.bool,
  children: PropTypes.shape().isRequired,
};

FlipCard.defaultProps = {
  flipped: false,
};

export default FlipCard;
