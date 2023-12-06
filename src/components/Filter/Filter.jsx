import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div>
        <label htmlFor="filter">Find contact by name</label>
        <input type="text" id="filter" onChange={this.props.handleFilter} />
      </div>
    );
  }
}
