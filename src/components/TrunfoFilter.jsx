import React from 'react';
import Props from 'prop-types';

export default class TrunfoFilter extends React.Component {
  render() {
    const { trunfoFilter, onInputChange } = this.props;
    return (
      <label htmlFor="trunfoFilter">
        <input
          type="checkbox"
          name="trunfoFilter"
          id="trunfoFilter"
          data-testid="trunfo-filter"
          checked={ trunfoFilter }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

TrunfoFilter.propTypes = {
  trunfoFilter: Props.bool.isRequired,
  onInputChange: Props.func.isRequired,
};
