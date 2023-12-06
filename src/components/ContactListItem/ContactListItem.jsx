import React, { Component } from 'react';

export class ContactListItem extends Component {
  render() {
    return this.props.filteredContacts.map(item => (
      <li key={item.id}>
        {item.name}:{item.number}
        <button onClick={() => this.props.onDeleteContact(item.id)}>
          Delete
        </button>
      </li>
    ));
  }
}
