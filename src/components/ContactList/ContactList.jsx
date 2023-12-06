import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export class ContactList extends Component {
  render() {
    const filteredContacts = this.props.getFilteredContacts();
    return (
      <ul>
        <ContactListItem
          filteredContacts={filteredContacts}
          onDeleteContact={this.props.onDeleteContact}
        />
      </ul>
    );
  }
}
