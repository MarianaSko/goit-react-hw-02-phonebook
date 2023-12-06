import React, { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledList } from './ContactList.style';

export class ContactList extends Component {
  render() {
    const filteredContacts = this.props.getFilteredContacts();
    return (
      <StyledList>
        <ContactListItem
          filteredContacts={filteredContacts}
          onDeleteContact={this.props.onDeleteContact}
        />
      </StyledList>
    );
  }
}
