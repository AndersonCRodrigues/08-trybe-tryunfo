import React from 'react';
import Props from 'prop-types';

export default class NameFilter extends React.Component {
  render() {
    const { nameFilter, onInputChange, trunfoFilter,
    } = this.props;
    return (
      <label htmlFor="nameFilter">
        Filtro pelo nome da carta:
        <input
          type="text"
          value={ nameFilter }
          name="nameFilter"
          id="nameFilter"
          data-testid="name-filter"
          onChange={ onInputChange }
          disabled={ trunfoFilter }
        />
      </label>
    );
  }
}

NameFilter.propTypes = {
  nameFilter: Props.string.isRequired,
  trunfoFilter: Props.bool.isRequired,
  onInputChange: Props.func.isRequired,
};
