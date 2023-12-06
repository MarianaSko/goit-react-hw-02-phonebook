import { Component } from 'react';
import { FilterWrapper, StyledLabel, StyledInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
        <StyledInput
          type="text"
          id="filter"
          onChange={this.props.handleFilter}
        />
      </FilterWrapper>
    );
  }
}
