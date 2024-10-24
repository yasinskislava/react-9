import { useState, useEffect } from 'react';
import Phonebook from './components/Phonebook';
import Filter from './components/Filter';
import './App.css';
import bin from "./bin.svg";

const info = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(info);
  const [filter, setFilter] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      console.log("update");
      setContacts(JSON.parse(localStorage.getItem("data")));
    }
    else {
      console.log("rewrite");
      const saveData = JSON.stringify(info);
      localStorage.setItem("data", saveData);
    }
  }, []);

 useEffect(() => {
     console.log("write");
     const newData = JSON.stringify(contacts);
     localStorage.setItem("data", newData);
   }, [count]);

    return (
      <>
        <Phonebook obj={[[contacts, setContacts], [count, setCount]]}></Phonebook>
        <h2>Contacts</h2>
        <Filter method={setFilter}></Filter>
        <ul>
          {contacts.map((item) => {
            if (item.name.toLocaleLowerCase().includes(filter)) {
              return <li key={item.id} id={item.id}>{item.name}: {item.number}<img src={bin} alt='bin' onClick={() => {
                const newList = contacts.filter((contact) => {
                  return contact.id !== item.id;
                })
                setContacts(newList);
                setCount(count + 1);
              }}/></li>;
            }   
            return false;
          })}
        </ul>
      </>
    );
}

export default App;
