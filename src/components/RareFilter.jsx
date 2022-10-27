import React from 'react';
import Props from 'prop-types';

export default class RareFilter extends React.Component {
  render() {
    const { rareFilter, onInputChange,
    } = this.props;
    return (
      <select
        name="rareFilter"
        id="rareFilter"
        data-testid="rare-filter"
        value={ rareFilter }
        onChange={ onInputChange }
      >
        <option value="">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    );
  }
}

RareFilter.propTypes = {
  rareFilter: Props.string.isRequired,
  onInputChange: Props.func.isRequired,
};
