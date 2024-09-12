import { Component } from 'react';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import './App.css';
import bin from "./bin.svg";

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
  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("data")) });
    }
    else {
      const saveData = JSON.stringify(this.state.contacts);
      localStorage.setItem("data", saveData);
    }
  }
  componentDidUpdate() {
    const newData = JSON.stringify(this.state.contacts);
    localStorage.setItem("data", newData);
  }
  render() {
    return (
      <>
        <Phonebook obj={this}></Phonebook>
        <h2>Contacts</h2>
        <Filter obj={this}></Filter>
        <ul>
          {this.state.contacts.map((item) => {
            if (item.name.toLocaleLowerCase().includes(this.state.filter)) {
              return <li key={item.id} id={item.id}>{item.name}: {item.number}<img src={bin} alt='bin' onClick={() => {
                const newList = this.state.contacts.filter((contact) => {
                  return contact.id !== item.id;
                })
                this.setState({ contacts: newList });
              }}/></li>;
            }   
            return false;
          })}
        </ul>
      </>
    );
  }
}

export default App;
