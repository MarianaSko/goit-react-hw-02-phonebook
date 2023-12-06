import { Component } from 'react';

export class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={this.props.handleChange}
            />
          </li>
          <li>
            <label htmlFor="number">Number </label>
            <input
              type="tel"
              name="number"
              id="number"
              required
              onChange={this.props.handleChange}
            />
          </li>
        </ul>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
