import React, { Component } from 'react';

export class ContactListItem extends Component {
  render() {
    return this.props.filteredContacts.map(item => (
      <li key={item.id}>
        {item.name}:{item.number}
      </li>
    ));
  }
}
