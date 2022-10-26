import React from 'react';
import './form.css';
import Props from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <h1>formulário</h1>
        <label htmlFor="name">
          Name
          <input
            value={ cardName }
            type="text"
            name="name"
            id="name"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            name="description"
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          Attr1
          <input
            value={ cardAttr1 }
            type="number"
            name="attr1"
            id="attr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input
            value={ cardAttr2 }
            type="number"
            name="attr2"
            id="attr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input
            value={ cardAttr3 }
            type="number"
            name="attr3"
            id="attr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            type="text"
            name="image"
            id="image"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="rare"
            id="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: Props.string,
  cardDescription: Props.string,
  cardAttr1: Props.string,
  cardAttr2: Props.string,
  cardAttr3: Props.string,
  cardImage: Props.string,
  cardRare: Props.string,
  cardTrunfo: Props.bool,
  hasTrunfo: Props.string,
  isSaveButtonDisabled: Props.bool,
  onInputChange: Props.func,
  onSaveButtonClick: Props.string,
}.isRequired;
