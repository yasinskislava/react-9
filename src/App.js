import { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ""
  };
  render() {
    return (
      <>
        <Phonebook obj={this}></Phonebook>
        <h2>Contacts</h2>
        <Filter obj={this}></Filter>
        <ul>
          {this.state.contacts.map((item) => {
            if (item.name.toLocaleLowerCase().includes(this.state.filter)) {
              return <li key={nanoid()} id={item.id}>{item.name}: {item.number}</li>;
            }   
            return false;
          })}
        </ul>
      </>
    );
  }
}

export default App;
