import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
      attr1Name,
      attr2Name,
      attr3Name,
    } = this.props;
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name-input">
          Name:
          <input
            id="name-input"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description-input">
          Description:
          <textarea
            id="description-input"
            data-testid="description-input"
            name="cardDescription"
            rows="4"
            cols="30"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attr1:
          <input
            id="attr1-name"
            type="text"
            name="attr1Name"
            value={ attr1Name }
            onChange={ onInputChange }
          />
          Valor:
          <input
            id="attr1-input"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Attr2:
          <input
            id="attr2-name"
            type="text"
            name="attr2Name"
            value={ attr2Name }
            onChange={ onInputChange }
          />
          Valor:
          <input
            id="attr2-input"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Attr3:
          <input
            id="attr3-name"
            type="text"
            name="attr3Name"
            value={ attr3Name }
            onChange={ onInputChange }
          />
          Valor:
          <input
            id="attr3-input"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Image:
          <input
            id="image-input"
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade:
          <select
            id="rare-input"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label id="trunfo" htmlFor="trunfo-input">
          { hasTrunfo && <p>Você já tem um Super Trunfo em seu baralho</p>}
          { !hasTrunfo && <input
            id="trunfo-input"
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
          { !hasTrunfo && <p>Super Trybe Trunfo</p>}
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="btn btn-primary"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  attr1Name: PropTypes.string.isRequired,
  attr2Name: PropTypes.string.isRequired,
  attr3Name: PropTypes.string.isRequired,
};

export default Form;
