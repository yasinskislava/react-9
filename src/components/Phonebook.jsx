import { nanoid } from "nanoid";

export default function Phonebook({ obj }) {
  const [[contacts, setContacts], [count, setCount]] = obj;
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            let contactName = e.target.elements.contactName.value;
            let contactNumber = e.target.elements.contactNumber.value;
            setContacts([...contacts, { name: contactName, number: contactNumber, id: nanoid() }]);
            setCount(count + 1);
            e.target.elements.contactName.value = "";
            e.target.elements.contactNumber.value = "";
          }}>
          <label htmlFor="name">
            Name
            <input type="text" name="contactName" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" required/>
          </label>
          <label htmlFor="number">
            Number
            <input type="tel" name="contactNumber" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" required/>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>);
}