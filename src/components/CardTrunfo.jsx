import React from 'react';
import Props from 'prop-types';

export default class CardTrunfo extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

CardTrunfo.propTypes = {
  cardTrunfo: Props.bool.isRequired,
  onInputChange: Props.func.isRequired,
};
