import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Game.css';

class Game extends React.Component {
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
      nextCardOfGame,
    } = this.props;
    return (
      <div id="background-game">
        <div id="Game">
          <div id="cardInPlay">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              attr1Name={ attr1Name }
              attr2Name={ attr2Name }
              attr3Name={ attr3Name }
            />
          </div>
          <button
            type="submit"
            onClick={ nextCardOfGame }
            className="btn btn-primary"
          >
            Proxima Carta
          </button>
          <div id="backCard">
            <div id="centerOfCard">
              <p>Tryunfo</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
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
  nextCardOfGame: PropTypes.func.isRequired,
};

export default Game;
