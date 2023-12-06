import React, { Component } from 'react';
import {
  StyledContactItem,
  StyledBtn,
  StyledSpan,
} from './ContsctListItem.styled';

export class ContactListItem extends Component {
  render() {
    return this.props.filteredContacts.map(item => (
      <StyledContactItem key={item.id}>
        <p>
          <StyledSpan>{item.name}:</StyledSpan> {item.number}
        </p>
        <StyledBtn onClick={() => this.props.onDeleteContact(item.id)}>
          Delete
        </StyledBtn>
      </StyledContactItem>
    ));
  }
}
