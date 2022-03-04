/* eslint-disable max-lines */
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import Game from './components/Game';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
      attr1Name: '',
      attr2Name: '',
      attr3Name: '',
      isGameStarted: false,
      arrayGame: [],
      index: 0,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.playGame = this.playGame.bind(this);
    this.returnCardOfGame = this.returnCardOfGame.bind(this);
    this.nextCardOfGame = this.nextCardOfGame.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateForm());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }

    this.addNewCard(newCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  addNewCard(card) {
    this.setState((prevState) => ({ savedCards: [...prevState.savedCards, card] }));
  }

  removeCard(event) {
    event.preventDefault();
    const name = event.target.parentElement.id;
    const { savedCards } = this.state;

    this.setState({
      hasTrunfo: false,
      savedCards: savedCards.filter((element) => element.cardName !== name),
    });
  }

  validateForm() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const smaller = 0;
    const limit = 90;
    const sumLimit = 210;
    const toNumber = (string) => parseInt(string, 10);
    if (
      cardName !== ''
      && cardDescription !== ''
      && smaller <= toNumber(cardAttr1)
      && toNumber(cardAttr1) <= limit
      && smaller <= toNumber(cardAttr2)
      && toNumber(cardAttr2) <= limit
      && smaller <= toNumber(cardAttr3)
      && toNumber(cardAttr3) <= limit
      && toNumber(cardAttr1) + toNumber(cardAttr2) + toNumber(cardAttr3) <= sumLimit
      && cardImage !== ''
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  playGame(event) {
    event.preventDefault();
    const { savedCards } = this.state;
    const control = 0.5;
    const newArray = savedCards.sort(() => Math.random() - control);
    this.setState({ isGameStarted: true, arrayGame: newArray });
  }

  nextCardOfGame() {
    const { index, arrayGame } = this.state;
    const increment = index + 1;
    if (increment < arrayGame.length) {
      this.setState({ index: increment });
    } if (increment >= arrayGame.length) {
      this.setState({ isGameStarted: false });
    }
  }

  returnCardOfGame() {
    const { arrayGame, index, attr1Name, attr2Name, attr3Name } = this.state;
    const card = arrayGame[index];
    return (
      <div id="Game">
        <h2>Game is ON!</h2>
        <Game
          cardName={ card.cardName }
          cardDescription={ card.cardDescription }
          cardAttr1={ card.cardAttr1 }
          cardAttr2={ card.cardAttr2 }
          cardAttr3={ card.cardAttr3 }
          cardImage={ card.cardImage }
          cardRare={ card.cardRare }
          cardTrunfo={ card.cardTrunfo }
          attr1Name={ attr1Name }
          attr2Name={ attr2Name }
          attr3Name={ attr3Name }
          nextCardOfGame={ this.nextCardOfGame }
        />
        <p id="rest">{`Cartas restantes: ${(arrayGame.length - index) - 1}`}</p>
      </div>
    );
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
      filterName,
      filterRare,
      filterTrunfo,
      attr1Name,
      attr2Name,
      attr3Name,
      isGameStarted,
    } = this.state;
    return (
      <div id="content">
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          attr1Name={ attr1Name }
          attr2Name={ attr2Name }
          attr3Name={ attr3Name }
        />
        <div id="preview-card">
          <h2>Preview da carta</h2>
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
        <Filter
          onInputChange={ this.onInputChange }
          filterTrunfo={ filterTrunfo }
        />
        {(filterTrunfo && savedCards.filter((it) => it.cardTrunfo === true)
          .map((element) => (
            <div className="eachCard" key={ element.cardName } id={ element.cardName }>
              <Card
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
                attr1Name={ attr1Name }
                attr2Name={ attr2Name }
                attr3Name={ attr3Name }
              />
              <button
                type="submit"
                data-testid="delete-button"
                onClick={ this.removeCard }
                className="btn btn-primary"
              >
                Excluir
              </button>
            </div>
          )))}
        {(filterTrunfo === false && filterName === '' && filterRare === '')
          ? savedCards.map((it) => (
            <div className="eachCard" key={ it.cardName } id={ it.cardName }>
              <Card
                cardName={ it.cardName }
                cardDescription={ it.cardDescription }
                cardAttr1={ it.cardAttr1 }
                cardAttr2={ it.cardAttr2 }
                cardAttr3={ it.cardAttr3 }
                cardImage={ it.cardImage }
                cardRare={ it.cardRare }
                cardTrunfo={ it.cardTrunfo }
                attr1Name={ attr1Name }
                attr2Name={ attr2Name }
                attr3Name={ attr3Name }
              />
              <button
                type="submit"
                data-testid="delete-button"
                onClick={ this.removeCard }
                className="btn btn-primary"
              >
                Excluir
              </button>
            </div>))
          : savedCards.filter((card) => (
            card.cardName.includes(filterName)))
            .filter((each) => each.cardRare === filterRare
              || (filterRare === '' && filterTrunfo === false))
            .map((element) => (
              <div className="eachCard" key={ element.cardName } id={ element.cardName }>
                <Card
                  cardName={ element.cardName }
                  cardDescription={ element.cardDescription }
                  cardAttr1={ element.cardAttr1 }
                  cardAttr2={ element.cardAttr2 }
                  cardAttr3={ element.cardAttr3 }
                  cardImage={ element.cardImage }
                  cardRare={ element.cardRare }
                  cardTrunfo={ element.cardTrunfo }
                  attr1Name={ attr1Name }
                  attr2Name={ attr2Name }
                  attr3Name={ attr3Name }
                />
                <button
                  type="submit"
                  data-testid="delete-button"
                  onClick={ this.removeCard }
                  className="btn btn-primary"
                >
                  Excluir
                </button>
              </div>
            ))}
        <button
          type="submit"
          onClick={ this.playGame }
          className="btn btn-primary"
          id="iniciate-game"
        >
          Iniciar Jogo
        </button>
        {(isGameStarted)
          ? this.returnCardOfGame()
          : null}
      </div>
    );
  }
}
export default App;
