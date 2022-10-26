import React from 'react';
import './form.css';
import Props from 'prop-types';
import CardTrunfo from './CardTrunfo';

export default class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <h1>formulário</h1>
        <label htmlFor="cardName">
          Name
          <input
            value={ cardName }
            type="text"
            name="cardName"
            id="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            name="cardDescription"
            id="cardDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr1
          <input
            value={ cardAttr1 }
            type="number"
            name="cardAttr1"
            id="attcardAttr1r1"
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr2
          <input
            value={ cardAttr2 }
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr3
          <input
            value={ cardAttr3 }
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        { hasTrunfo
          ? <span>Você já tem um Super Trunfo em seu baralho</span>
          : <CardTrunfo cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />}
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
  hasTrunfo: Props.bool,
  isSaveButtonDisabled: Props.bool,
  onInputChange: Props.func,
  onSaveButtonClick: Props.func,
}.isRequired;
