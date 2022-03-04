import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends React.Component {
  render() {
    const { onInputChange, filterTrunfo } = this.props;
    return (
      <form id="filter">
        <h2>Todas as Cartas</h2>
        <p>Filtros de busca</p>
        <input
          name="filterName"
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          onChange={ onInputChange }
          disabled={ filterTrunfo }
        />
        <select
          data-testid="rare-filter"
          name="filterRare"
          onChange={ onInputChange }
          disabled={ filterTrunfo }
        >
          <option selected value="">todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label id="filterIsTrunfo" htmlFor="trunfo-filter">
          <input
            id="trunfo-filter"
            name="filterTrunfo"
            data-testid="trunfo-filter"
            type="checkbox"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
