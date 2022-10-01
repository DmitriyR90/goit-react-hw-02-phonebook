import { Component } from 'react';
import { CreateContact } from './CreateContact/CreateContact';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { name: 'kadsjfhg', id: 1 },
      { name: 'jadfng', id: 2 },
      { name: 'ojdnflg', id: 3 },
      { name: 'fljsdf', id: 4 },
    ],
    name: '',
  };

  handleSubmit = values => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <CreateContact onSubmit={this.handleSubmit} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
