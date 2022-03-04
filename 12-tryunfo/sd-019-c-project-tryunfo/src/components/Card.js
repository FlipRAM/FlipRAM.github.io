import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      attr1Name,
      attr2Name,
      attr3Name,
    } = this.props;
    const space = '..........................';
    return (
      <section className="Card">
        <p id="name" data-testid="name-card">
          {cardName}
        </p>
        <div id="photo-container">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div id="description-container">
          <p data-testid="description-card" id="description">
            {cardDescription}
          </p>
        </div>
        <div className="stats">
          <p className="attr" data-testid="attr1-card">
            <span>{attr1Name}</span>
            <div>{space}</div>
            <div className="attrValue">
              {cardAttr1}
            </div>
          </p>
          <p className="attr" data-testid="attr2-card">
            <span>{attr2Name}</span>
            <div>{space}</div>
            <div className="attrValue">
              {cardAttr2}
            </div>
          </p>
          <p className="attr" data-testid="attr3-card">
            <span>{attr3Name}</span>
            <div>{space}</div>
            <div className="attrValue">
              {cardAttr3}
            </div>
          </p>
          <p id="rare" data-testid="rare-card">
            {cardRare}
          </p>
        </div>
        {
          cardTrunfo
          && <p id="trunfo-card" data-testid="trunfo-card"> Super Trunfo </p>
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  attr1Name: PropTypes.string.isRequired,
  attr2Name: PropTypes.string.isRequired,
  attr3Name: PropTypes.string.isRequired,
};

export default Card;
