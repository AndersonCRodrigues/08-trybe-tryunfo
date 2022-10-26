import React from 'react';
import './form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <h1>formulário</h1>
        Name
        <label htmlFor="name">
          <input type="text" name="name" id="name" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr1
          <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" name="image" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <select name="rare" id="rare" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}
